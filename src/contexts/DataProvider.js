import {useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, collectionGroup, doc, getDoc, Timestamp, addDoc, orderBy, query, setDoc } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [ cars, setCars ] = useState([])
    const { user } = useContext(AuthContext)
    const [ userCars, setUserCars ] = useState([])

    async function getUsername(doc) {
        const userData = await getDoc(doc.ref.parent.parent)
                // console.log(userData)
                const username = userData.data().username
                return {
                    uid: userData.id,
                    username: username
                }
    }

    useEffect(() => {
        async function getCars(){
            const carsDocs = []
            const q = query(collectionGroup(db, 'car'))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach(async (doc) => {

                const userDataObject = await getUsername(doc)

                carsDocs.push({
                    id:doc.id,
                    ...userDataObject,
                    ...doc.data()
                })
                setCars(carsDocs)
            })

        }
    
        getCars()
        },[])

        useEffect(() => {
            if (!user.loggedIn) {
                return
            } 
                async function getUserCars(){
                    const userCarsDocs = []
                    console.log(user.uid)
                    const q = query(collection(db, 'user', user.uid, 'car'))

                    const querySnapshot = await getDocs(q)
                    console.log(querySnapshot)
        
                    querySnapshot.forEach(async (doc) => {
            
                        userCarsDocs.push({
                            id:doc.id,
                            ...doc.data()
                        })
                        setUserCars(userCarsDocs)
                    })
        
                }
            
                getUserCars()
            },[user.loggedIn])

       
        async function loadCar(uid, id){
            const carRef = doc(db, 'user', uid, 'car', id)
            const carSnap = await getDoc(carRef)

            const userDataObject = await getUsername(carSnap)

            console.log({
                id: carSnap.id,
                ...userDataObject,
                ...carSnap.data()
            })
            if (carSnap.exists()) {
                return {
                    id: carSnap.id,
                    ...userDataObject,
                    ...carSnap.data()
                }
            } else {
                console.log(`Car with id ${id} does not exist`)
            }
        }
            async function addCar(name, year, selling_price, km_driven, fuel, seller_type, transmission, owner, mileage, engine, max_power, torque, seats) {
                const newCar = {  //carObj
                    name:name,
                    year: year,
                    selling_price: selling_price,
                    km_driven: km_driven,
                    fuel: fuel,
                    seller_type: seller_type,
                    transmission: transmission, 
                    owner: owner,
                    mileage: mileage,
                    engine: engine,
                    max_power, max_power,
                    torque: torque,
                    seats: seats
                }
                
                const userDoc = await setDoc(doc(db, 'user', user.uid), {
                    username:user.username
                })

                const carDoc = await addDoc(collection(db, 'user', user.uid , 'car'), newCar)
                // console.log(` this is a new car ${newCar} `)
                // console.log(newCar)
                // const doc = await addDoc(collection(db, 'cars'), newCar)

                newCar.id = carDoc.id
                console.log(newCar)
                setCars([newCar, ...cars])
                setUserCars([newCar, ...userCars])
            
            }


           
         // main context function end




    const value = {
        cars,
        loadCar, 
        addCar,
    }

    return (
        <DataContext.Provider value={ value }>
            { props.children }
        </DataContext.Provider>
    )
}