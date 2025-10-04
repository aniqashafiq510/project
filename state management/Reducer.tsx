"use client"

import { useReducer } from "react";

import React from 'react'

const initialState = 0
const reducer = (state: number,action : {type: unknown}) => {
switch (action.type) {
    case "Increment":
    return state + 1;
    case "decrement":
        return state - 1;
    default : 
    return state

}

}

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <p>{state}</p>
    <button onClick={()=> dispatch({type: "Increment"})}>🔼</button>
    <button onClick={()=> dispatch({type: "decrement"})}>🔽</button>
    </>
  )
}

export default Reducer