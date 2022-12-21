import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarSingle from './views/CarSingle'

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/inventory'>Inventory</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/profile' element={ <Profile/> } />    
        <Route path='/inventory'>
          <Route path=":id" element= { <CarSingle/> }></Route>
          <Route path="" element= { <Inventory/> }></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
