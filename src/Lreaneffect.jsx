import {useEffect, useState} from 'react'

const Lreaneffect = () => {
    const [count,setCount] = useState(0)
    const [randomnum,setRandomnum] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const  gerateRandomNum=()=>{
        const randomnum=Math.floor(Math.random()*100)
        setRandomnum(randomnum)
    }
    // useEffect with empty dependency array runs only once when the component mounts
    useEffect(()=>{
        console.log("useEffect called")
        return ()=> {
            console.log("useEffect cleanup")
        }
    },  [count])
  return (
    <>
    <h2>count:{count}</h2>
    <button onClick={increment}>++</button>

    <h3>random number:{randomnum}</h3>
    <button onClick={gerateRandomNum}>generate random number</button>

    </>
  )
}

export default Lreaneffect