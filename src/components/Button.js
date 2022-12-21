import { useState } from 'react';
import Car from './Car'
import setCar from '../views/Profile'
 
export default function Button(props) {

    // console.log(props)
    return (
<button onClick={ props.handleClick } >Car { props.car.id }</button>
    )}