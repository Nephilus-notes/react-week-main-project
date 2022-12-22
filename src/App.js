import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Inventory from "./views/Inventory";
import Profile from "./views/Profile";
import CarSingle from "./views/CarSingle";
import { AuthContext } from "./contexts/AuthProvider";
import { useContext } from 'react';

function App() {
  const { login, user, logout } = useContext(AuthContext)

  return (
    <div className="App">
            <h2>Loggedin User : { user.username }</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {
            (user.loggedIn) ?
          <li><button onClick={ logout } className='button'>Log Out</button></li> :
          <li><button onClick={ login } className='button'>Login</button></li>
          }
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory">
            <Route path=':uid'>
              <Route path=":id" element={<CarSingle />}></Route>
            </Route>
            <Route path="" element={<Inventory />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
