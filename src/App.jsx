import React from 'react'
import data from './data.json'
import { useReducer , useEffect } from 'react'
import Menu from './components/Menu'
import CartDisplay from './components/CartDisplay'
import cartRedcuer from './components/CartReducer'

function App() {
  
  const transformedData = data.map((item)=>{
    return {
      ...item,
      image: {
        ...item.image,
        thumbnail: item.image.thumbnail.replace('./','src/'),
        mobile: item.image.mobile.replace('./','src/'),
        tablet: item.image.tablet.replace('./','src/'),
        desktop: item.image.desktop.replace('./','src/'),
      }
    };
  });

  const initial_state={
    total_ni:0,
    total_price:0,
    items:transformedData.map((item,i)=>{
        return{
            path:item.image.thumbnail,
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
    <div className="App bg-[hsl(20_50%_98%)] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-4 lg:gap-6 p-8">
      <Menu dispatch={dispatch} state={state} data={transformedData}/>
      <CartDisplay state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
