import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "@firebase/auth"

export const AuthContext = createContext()

export const AuthProvider = function(props) {
    const [user, setUser] = useState({
        loggedIn: false
    })

    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    async function login() {
        const result = await signInWithPopup(auth, provider)  
        console.log(result)
    }
    
    async function logout() {
        const result = await signOut(auth)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (userInfo) => {
            // console.log(userInfo)
        if (userInfo) {
            setUser({
                email: userInfo.email,
                username: userInfo.displayName,
                uid: userInfo.uid,
                loggedIn: true
            })
        } else {
            setUser({
                loggedIn: false
            })
        }
        })
    }, [])

    const value = {
        login,
        user,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}