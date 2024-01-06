import {createContext, useState,useContext} from "react"

const UserContext=createContext(undefined)
export const Userprovider=({children})=>{
    const[user]=useState({
        name:'john',
        email:'john12@gmail.com',
    })
    return (<UserContext.Provider value={{user}}>{children}</UserContext.Provider>)
}

export const useUser=()=>useContext(UserContext)