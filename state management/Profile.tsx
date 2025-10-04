
"use client"
import { useAuth } from "./Context"


 
import React from 'react'

const UserProfile = () => {
    const {user, login,logout} = useAuth()
  return (
    <div>
        {user ? (
            <div>
                <p>Hello, {user.name} and your email is {user.email}</p>
                <button className="p-2 m-5 ring ring-blue-500 rounded-md hover:bg-gray-500" onClick={logout}>Log Out</button>
            </div>
        ): (
            <button className="p-2  m-5 ring ring-blue-500 rounded-md hover:bg-gray-500"
             onClick={()=> login({id:1, name: "Aniqa", email: "aniqa123@gmail.com"})}>LogIn</button>
        )} 
    </div>
  )
}

export default UserProfile