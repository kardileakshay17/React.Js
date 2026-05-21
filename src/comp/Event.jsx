import React from 'react'

const Event = () => {
    const handleclick = () => {
        console.log('button clicked')
    }
  return (
    <>
    <button onClick={handleclick}>click here</button>
    </>
  )
}

export default Event