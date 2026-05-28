import { useState, useMemo } from 'react'

const LearnUseMemo = () => {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(40000)

    const incrementCount = () => {

        if (count === 10) {
            setNumber(50000)
        }

        setCount(count + 1)
    }

    const sumofNumbers = useMemo(() => {

        let sum = 0

        for (let i = 0; i < number; i++) {
            sum += i
        }

        return sum

    }, [number])

    console.log(`sum of numbers ${number}:`, sumofNumbers)

    return (
        <>
            <h3>Learn useMemo</h3>

            <h3>Count: {count}</h3>

            <h3>Sum: {sumofNumbers}</h3>

            <button onClick={incrementCount}>++</button>
        </>
    )
}

export default LearnUseMemo