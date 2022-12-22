import { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import { DataContext } from "../contexts/dataProvider";
import Car from "../components/Car";

export default function Profile(props) {
  const { cars, loadCar, addCar } = useContext(DataContext);
//   const [car, setCar] = useState("");


  function handlePopulate(event) {
    event.preventDefault()
      async function buildCarDb(){
          const response = await fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars")
          const data = await response.json()
        //   console.log(data[1])
        for (let i = 1; i < data.length; i++) {
          const newCar = data[i]
            console.log(newCar)
          addCar(newCar)
        }
        //   console.table(data)
      }
      buildCarDb()
      }

      function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        console.log("form Submission")
        addCar(formData.get('name'), formData.get('year'), formData.get('selling_price'), formData.get('km_driven'), formData.get('fuel'), formData.get('seller_type'), formData.get('transmission'), formData.get('owner'),formData.get('mileage'), formData.get('engine'), formData.get('max_power'), formData.get('torque'), formData.get('seats'))
      }

  return (
    <div className="Profile">
      <h1>Profile</h1>

      <h2>Create a New Listing</h2>
      <form action="">
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
        <button onSubmit={handleSubmit}>Post it!</button>
      </form>

      {/* <button onClick={handlePopulate}>Pull it!!</button> */}
      {/* <ul>
         {cars.map(car => <Button car={ car } handleClick={ async ()=>  await loadCar(car.id) } key={ car.id } showLink = 'true'/>)}
          {
            (car) ?
            <Car car={ car }/> :
            <></>

          }
        </ul> */}
    </div>
  );
}
