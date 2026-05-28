import Header from "./comp/header"
import Learn_props from "./comp/Learn_props"
import Lrean from "./comp/Lrean"
import Lrean_react from "./comp/Lrean_react"
import Event from "./comp/Event"
import LreanUseState from "./LreanUseState"
import CounterApp from "./CounterApp"
import Lreaneffect from "./Lreaneffect"
import LearnUseMemo from "./comp/learnUseMemo"
import ChildA from "./comp/ChildA"
import { createContext, useState } from "react"
 


const StockContext = createContext()
const UserContext=createContext()

function App() {
  let stock = 'Apple Inc.'
  let price = 150

  const[user,setuser]=useState({name:"Akshay",isLoggedIn:"Yes"})

  const getstock = (data) => {
    console.log('Stock data from child component:', data);
  }
  return (
    <>
      {/* <h3>Leran React.js</h3>
    <Header/>
    <Lrean/>
    <Lrean_react/> */}
      {/* <Learn_props stock="Apple Inc." price={price} /> */}
      {/* <Event></Event> */}
      {/* <LreanUseState></LreanUseState> */}
      {/* <CounterApp></CounterApp> */}
      {/* <Lreaneffect></Lreaneffect> */}
      {/* <LearnUseMemo></LearnUseMemo> */}
      <StockContext.Provider value={{ stock, price }}>
        <UserContext.Provider value={{user,setuser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider>
    </>
  )
}

export default App
export { StockContext,UserContext}
