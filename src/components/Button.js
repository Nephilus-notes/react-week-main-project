import { useState } from 'react';
import Car from './Car'
 
export default function Button(props) {

    console.log(props)
    return (
<button onClick={ () => props.handler(<Car car={ props.car }/>)}>Car 1</button>
    )}