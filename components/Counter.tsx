"use client"

import { useState } from "react"



const Counter = () => {
    const [count,setCount] = useState(0)

    const increamentClickHandler = ()=> {
        setCount(count+1)
    }

    const decreamentClickHandler = ()=>{
        if(count === 0){
            alert("❌ Can't go lower than zero!")
        }
        else{
            setCount(count-1)
        }
    }
  return (
    <div className="bg-gray-500 rounded-md mx-auto p-4  mt-50 w-78 ring-cyan-300 flex shadow-[3px_5px_20px] shadow-white ">
        
        <div className="flex flex-col justify-center mt-4 ">
            <button className=" text-3xl rounded-md p-2 focus:scale-90  " onClick={increamentClickHandler}>🔼</button>
            <button className=" text-3xl rounded-md p-2 focus:scale-90 " onClick={decreamentClickHandler}>🔽</button>
        </div>
        <h1 className="text-4xl font-bold text-center ml-20 mt-10 hover:text-teal-400 ">{count}</h1>
    </div>
  )
}

export default Counter