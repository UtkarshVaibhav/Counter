import React, { useState } from 'react'
import "./Counter.module.css"
export const Counter = ({initial}) => {
    const [count,setCount] = useState(initial);
    const add=()=>{
        setCount(count+1);
    }
    const minus=()=>{
        setCount(count-1);
    }
    const multiply=()=>{
        if(count===0)
        {
            alert("Value is Zero, Multiplication will Always result in value zero")
        }
        else{
            setCount(count*2);
        }
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
       <h1>Counter: {count}</h1>
       <button onClick={add}>increment</button>
       <button onClick={minus}>decrement</button>
       <button onClick={multiply}>double</button>
       <button onClick={reset}>reset</button>
    </div>
  )
}
