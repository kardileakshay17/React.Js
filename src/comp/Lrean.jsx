import React from 'react'

const Lrean = () => {
  
  let stock = 'Apple Inc.'

  return (
    <>
      <h2>Learn JSX</h2>
      <h2>price{10 + 10}</h2>
      <h2>Stock Name: {stock}</h2>
      <h2 className='bg-success'>class</h2>
      <h3 className={stock}>dynamic class</h3>
    </>
  )
}

export default Lrean