"use client"

// use client sb sy uper likhna h wrna error dy ga

import React from 'react'


export default function Button() {
  const clickHandler = ()=> {
    alert("Button has clicked!")
  }
  return (
    <div onClick={clickHandler} className=' transition-colors duration-300 cursor-pointer text-black border-1 border-white bg-gray-300 m-4 w-54 hover:text-white hover:bg-gray-500'>Click me!</div>
  )
}


// RENDERING...conversion of code into UI
