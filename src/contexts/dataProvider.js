import {useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, doc, getDoc, Timestamp, addDoc, orderBy, query } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()

    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars(){
            const carsDocs = []
            const querySnapshot = await getDocs(collection(db, 'cars'))

            querySnapshot.forEach((doc) => {
                carsDocs.push({
                    id:doc.id,
                    ...doc.data()
                })
            })
            // console.table(carsDocs)
            setCars(carsDocs)
        }
    
        getCars()
        },[])

       
        async function loadCar(id){
            const carRef = doc(db, 'cars', id)
            const carSnap = await getDoc(carRef)

            console.log({
                id: carSnap.id,
                ...carSnap.data()
            })
            if (carSnap.exists()) {
                return {
                    id: carSnap.id,
                    ...carSnap.data()
                }
            } else {
                console.log(`Car with id ${id} does not exist`)
            }
        }
        // name, year, selling_price, km_driven, fuel, seller_type, transmission, owner, mileage, engine, max_power, torque, seats
            async function addCar(carObj) {
                const newCar = carObj
                    // name:name,
                    // year: year,
                    // selling_price: selling_price,
                    // km_driven: km_driven,
                    // fuel: fuel,
                    // seller_type: seller_type,
                    // transmission: transmission, 
                    // owner: owner,
                    // mileage: mileage,
                    // engine: engine,
                    // max_power, max_power,
                    // torque: torque,
                    // seats: seats
                
                console.log(` this is a new car ${newCar} `)
                console.log(newCar)
                // const doc = await addDoc(collection(db, 'cars'), newCar)

                newCar.id = doc.id
                setCars([newCar, ...cars])
            
            }


           
         // main context function end




    const value = {
        cars,
        loadCar, 
        addCar
    }

    return (
        <DataContext.Provider value={ value }>
            { props.children }
        </DataContext.Provider>
    )
}