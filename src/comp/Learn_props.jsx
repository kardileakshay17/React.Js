import React from 'react'

// const Learn_props = (props) => {
//   return (
//     <>
//     <h3>Stock Name: {props.stock}</h3>
//     <h5>price:{props.price}</h5>
//     </>
    
//   )
// }

// export default Learn_props

const Learn_props = ({stock, price}) => {
  return (
    <>
    <h3>Stock Name: {stock}</h3>
    <h5>price:{price}</h5>
    </>
    
  )
}

export default Learn_props