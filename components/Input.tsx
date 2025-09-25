
"use client"
import React, { useState } from 'react'

const Input = () => {
    const [name,setname] = useState("")
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value)
    }
  return (
    <div className='mt-10 flex flex-col justify-center items-center space-y-4'>
        <input type="text" placeholder='Enter your name....' value={name} className='p-2 outline-none ring-2
         ring-cyan-400' onChange={changeHandler}  />

        <p>Hello, {name} </p>
    </div>
  )
}

export default Input