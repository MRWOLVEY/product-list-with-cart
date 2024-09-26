import React from 'react'
import data from './data.json'
import { useReducer , useEffect } from 'react'
import Menu from './components/Menu'
import CartDisplay from './components/CartDisplay'
import cartRedcuer from './components/CartReducer'

function App() {

  const initial_state={
    total_ni:0,
    total_price:0,
    items:data.map((item,i)=>{
        return{
            name:item.name,
            unit_price:Number(item.price),
            no_items:0,
            total_item_price:0//to be changed to 0
        }   
    })
}   

  const [state,dispatch]=useReducer(cartRedcuer,initial_state)

  useEffect(()=>{
    console.log(state)
  },[state])

  return (
    <div className="App bg-[#fcf9f4] flex">
      <Menu dispatch={dispatch} state={state}/>
      <CartDisplay state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
