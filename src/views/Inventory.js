import { useState, useContext } from 'react';
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider';
import { AuthContext } from '../contexts/AuthProvider'

export default function Inventory() {
    const { cars } = useContext(DataContext)
    const { user } = useContext(AuthContext)

    
    return (
        <div className="Inventory">
        <h1>Inventory</h1>
            <div className="flex-container">
            {
                (user.loggedIn) ?
                cars.map( car => <Car car={ car } key={ car.id } showLink = 'true' /> ):
                <p><strong>Please log in to view your car dashboard</strong></p>
            }
            </div>
        </div>
    )}