import { useState, useEffect } from 'react';
import Button from '../components/Button'
import Car from '../components/Car'

export default function Profile(props) {
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({})

    useEffect(() => {
        async function getCars(){
            const response = await fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars")
            const data = await response.json()
            setCars(data)
            console.log(data)
        }
    
        getCars()
        },[])


    return (
        <div className="Profile">
        <h1>Profile</h1>
        <p>Your information is here</p>
        <p>But it's hiding.</p>
        <p>Click below!</p>
        <ul>
         {cars.map(car => <Button car={ car }  key={ car.id }/>)}
          {
            (car.id) ?
            <Car car={ props.car } key={ props.car.id }/> :
            <></>

          }
        </ul>
        </div>
    )}