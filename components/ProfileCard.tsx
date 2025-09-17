"use client"
interface ProfileProp {
    name : string,
    age: number,
    onlineStatus : boolean,
    
}
// interface me data ki type btaty hain wrna typescript error deta h

import React from 'react'

const ProfileCard = (props : ProfileProp) => {
  return (
    <div>
        <h1 className='mx-auto text-center font-bold text-3xl mt-5 hover:text-teal-400 transition-colors duration-200'><span className='italic text-4xl'>Props</span> is a concept of passing data from parent to child component </h1>
        <div className='mx-auto bg-gray-500 mt-30 w-[30vw] text-center p-8 shadow-md shadow-gray-300  hover:scale-110
     transition-transform duration-300'>
        <h1 className='font-bold'>This is my profile card</h1>
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Status : {props.onlineStatus ? "🟩online" :"🟥offline"}</p>
        </div>
        
    </div>
    </div>
  )
}

export default ProfileCard