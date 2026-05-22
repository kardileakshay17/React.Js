import { useState } from 'react'

const LreanUseState = () => {
    const[count,setCount] = useState(10)
    console.log(count)

    const handleNum=()=>{
        setCount(20)
    }    

    const[stockprice,setStockprice] = useState({stock:"Apple Inc.",price:100})
    console.log(stockprice)

    const updateStockPrice=()=>{
        setStockprice({...stockprice,price:200})    
    }
    return (
     <>
     <h5>conut number:{count}</h5>

     <button onClick={handleNum}>click here</button>
     <hr/>
     <h4>stock Name:{stockprice.stock}stock Price:${stockprice.price.toFixed(2)}</h4>
     <button onClick={updateStockPrice}>Update Stock Price</button>
     </>
  )
}

export default LreanUseState