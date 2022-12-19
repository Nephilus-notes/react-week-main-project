import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inventory from './Inventory'
import Car from './Car'
import Button from './Button'

export default function Profile(props) {
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
    const [car, carSet] = useState()
    return (
        <div className="Profile">
        <h1>Profile</h1>
        <p>Your information is here</p>
        <p>But it's hiding.</p>
        <p>Click below!</p>
        <ul>
         {cars.map(car => <Button car={ car } handler={ carSet } key={ car.car_id }/>)}
            { (car) ?? <></> }


          {/* <li><Inventory/></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/contact'>Contact</Link></li> */}
        </ul>
        </div>
    )}