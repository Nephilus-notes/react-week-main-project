import { useState } from 'react';

export default function Car(props) {
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
            'miles_driven': 30000
        },
    
    ])

    let [car, setCar] = useState(cars[props.car_id -1] ?? cars[0])

    return (
        <div className="Car">
        {/* <h3>{ props.car.car_id }</h3> */}
        <p><strong>Make: </strong>{ props.car.make } <strong>Model: </strong>{ props.car.model }</p>
        <p>Year: { props.car.year } Color: { props.car.color } Mileage: { props.car.miles_driven }</p>
        </div>
    )}