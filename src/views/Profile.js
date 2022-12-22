import { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import { DataContext } from "../contexts/dataProvider";
import Car from "../components/Car";

export default function Profile(props) {
  const { cars, loadCar, addCar } = useContext(DataContext);
//   const [car, setCar] = useState("");


  useEffect(() => {
      async function buildCarDb(){
          const response = await fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars")
          const data = await response.json()
        //   console.log(data[1])
          const newCar = data[1]
console.log(newCar)
          addCar(newCar)
        //   console.table(data)
      }

      buildCarDb()
      },[])

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
        <button>Post it!</button>
      </form>
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
