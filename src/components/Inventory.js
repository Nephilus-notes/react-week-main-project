import { useState } from 'react';
import Car from './Car'

export default function Inventory(props) {
    const [cars, setCars] = useState([
        {
            'car_id':1,
            'make': 'Toyota',
            'model': 'Camry',
            'year': 2003,
            'color': 'Blue',
            'miles driven': 50000
        },
        {
            'car_id':2,
            'make': 'Honda',
            'model': 'Odyssey',
            'year': 2015,
            'color': 'Purple',
            'miles driven': 100340
        },
        {
            'car_id':3,
            'make': 'Kia',
            'model': 'Sonata',
            'year': 2009,
            'color': 'Silver',
            'miles driven': 163423
        },
        {
            'car_id':4,
            'make': 'Ford',
            'model': 'Escort',
            'year': 2018,
            'color': 'Red',
            'miles driven': 30000
        },
        
    ])

    // let car_id=props.car_id ?? 1

    return (
        <div className="Inventory">
        <h1>Inventory</h1>
        { cars.map( car => <Car car={ car } key={ car.car_id }/>
        )
        }
        <p>This is where we tell you what we're all about.</p>
        </div>
    )}