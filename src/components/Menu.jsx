import React from 'react'
import MenuItem from './MenuItem'
import data from '../data.json'

function Menu({state,dispatch,data}) { 

  return (
    <div className='block w-fit'>
      <h1 className='text-3xl mb-5 font-bold p-1'>Desserts</h1>
      <div className="Desserts grid lg:grid-cols-3 grid-cols-1 gap-4 w-fit">
        {data.map((item,i)=>{
          return <MenuItem item={item} key={i} id={i} state={state} dispatch={dispatch}/>
        })}
      </div>
      <div className="Cart"></div>
    </div>
  )
}

export default Menu
