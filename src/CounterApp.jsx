import React from 'react'
import { useState } from 'react'

const CounterApp = () => {

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const resetcount=()=>{
        setCount(0)
    }
  return (
    <>
    <h1>Counter App</h1>
    <h5>count:{count}</h5>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>     
    <button onClick={resetcount}>Reset</button>
    </>
  )
}

export default CounterApp