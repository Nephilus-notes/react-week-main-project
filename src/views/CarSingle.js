import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider';


export default function CarSingle() {
    const[car, setCar] = useState({})
    const { id } = useParams()
    const { loadCar } = useContext(DataContext)

    useEffect(() => {
        async function handleLoadCar(){
            const data = await loadCar(id)
            setCar(data)
            console.log(data)
        }
    
        handleLoadCar()
        },[id])

    return (
        <div className="car">
             <div className="flex-container">
                
            <Car key={car.id} car={car} /> 
            </div>
        </div>
    )
}