import {useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, doc, getDoc, Timestamp, addDoc, orderBy, query } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()

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

       
        async function loadCar(id){
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
           return data
        }




    const value = {
        cars,
        loadCar
    }

    return (
        <DataContext.Provider value={ value }>
            { props.children }
        </DataContext.Provider>
    )
}