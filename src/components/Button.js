import { useState } from 'react';
import Car from './Car'
import setCar from '../views/Profile'
 
export default function Button(props) {

    // console.log(props)
    return (
<button onClick={ () => {
console.log(props.car)
setCar(props.car.id)
console.log(<Car car={ props.car } key={ props.car.id }/>)
return <Car car={ props.car } key={ props.car.id }/>

}
}>Car { props.car.id }</button>
    )}