import { useState } from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(40000)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const sumofNumbers = () => {
        let sum = 0

        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        return sum;
    }
    
    console.log(`sum of numbers ${number}:`, sumofNumbers());
    return (
        <>
            <h3>Learn useMemo</h3>
            <h3>Count:{count}</h3>
            <button onClick={incrementCount}>++</button>
        </>
    )
}
export default LearnUseMemo