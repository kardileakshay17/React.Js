import React from 'react'
import { StockContext,UserContext } from '../App'

const ChildC = () => {
    return (
        <>
            <StockContext.Consumer>
                {
                    ({ stock, price }) => {
                        return (
                            <UserContext.Consumer>
                                {
                                    ()=>{
                                        return(
                                            <>
                                                <h5>ChildC: {stock}, Price: {price}</h5>

                                             </>
                                                                          )                                                  }
                                }
                            </UserContext.Consumer>
                        )
                    }
                }
            </StockContext.Consumer>
        </>
    )
}

export default ChildC