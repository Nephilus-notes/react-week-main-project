import { useState, useContext } from 'react';
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider';

export default function Inventory() {
    const { cars } = useContext(DataContext)

    
    return (
        <div className="Inventory">
        <h1>Inventory</h1>
            <div className="flex-container">

            { cars.map( car => <Car car={ car } key={ car.id } showLink = 'true' />
            )
            }
            </div>
        </div>
    )}