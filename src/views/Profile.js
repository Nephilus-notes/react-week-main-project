import { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthProvider";
import { DataContext } from "../contexts/DataProvider";
import Car from "../components/Car";
import { useParams } from 'react-router-dom'


export default function Profile(props) {
  const { cars, userCars, loadCar, addCar } = useContext(DataContext);
  const { user } = useContext(AuthContext)
  const [car, setCar] = useState("");


      function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        console.log("form Submission")
        addCar(formData.get('name'), formData.get('year'), formData.get('selling_price'), formData.get('km_driven'), formData.get('fuel'), formData.get('seller_type'), formData.get('transmission'), formData.get('owner'),formData.get('mileage'), formData.get('engine'), formData.get('max_power'), formData.get('torque'), formData.get('seats'))
        event.target.reset()
      }
       if (user.loggedIn) {
  return (
    <div className="Profile">
      <h1>Profile</h1>

      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
      <div className="flex-container">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="year" placeholder="year" />
        <input type="text" name="selling_price" placeholder="selling_price" />
        <input type="text" name="km_driven" placeholder="km_driven" />
        <input type="text" name="fuel" placeholder="fuel" />
        <input type="text" name="seller_type" placeholder="seller_type" />
        <input type="text" name="transmission" placeholder="transmission" />
        <input type="text" name="owner" placeholder="owner" />
        <input type="text" name="mileage" placeholder="mileage" />
        <input type="text" name="engine" placeholder="engine" />
        <input type="text" name="max_power" placeholder="max_power" />
        <input type="text" name="torque" placeholder="torque" />
        <input type="text" name="seats" placeholder="seats" />
        </div>
        <button className='button'>Post it!</button>
      </form>

      {/* <button onClick={handlePopulate}>Pull it!!</button> */}
      <ul>
      <div className="flex-container">
         {userCars.map(car => <Button car={ car } handleClick={ async ()=> { 
          console.log( car.uid)
          console.log( user.uid )          
          const newCar = await loadCar(user.uid, car.id)
          console.log(user.uid, car.id)
          setCar(newCar)
         }
         } key={ car.id } />)}
         </div>
               <div className="flex-container">

          {
            (car) ?
            <Car car={ car } showLink = 'true'/> :
            <></>

          }
          </div>
        </ul>
    </div>
  )} else {
  return ( 
    <div className="Profile">
      <h1>Profile</h1>

      <h2>Create a New Listing</h2>
    <p><strong>Please log in to view your car dashboard</strong></p>
    </div>
  )}
  
  ; 
} 
