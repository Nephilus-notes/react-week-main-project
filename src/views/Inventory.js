import { useState, useEffect } from 'react';
import Car from '../components/Car'

export default function Inventory(props) {
    const [cars, setCars] = useState([])

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
        <div className="Inventory">
        <h1>Inventory</h1>
            <div className="flex-container">

            { cars.map( car => <Car car={ car } key={ car.id }/>
            )
            }
            </div>
        </div>
    )}