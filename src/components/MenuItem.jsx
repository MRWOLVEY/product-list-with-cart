import { useEffect, useState } from 'react'
import React from 'react'

function MenuItem({item}) {

    const [active,setActive]=useState(true);
    const [no_items,setNo_items]=useState(0);

  return (
    <div>
        <img src={item.image.thumbnail} alt="" className=""/> 
        {!active&&
        <button className="add_to_cart flex justify-center" onClick={() => {setNo_items(no_items+1)}}>
            <img src="src/assets/images/icon-add-to-cart.svg" alt="" />
            <p>Add to cart</p>
        </button>}
        {active&&
        <div className="add_to_cart flex justify-between items-center bg-orange-500 text-white">
            <button className="decrement w-5 h-5 border border-white rounded-full " >
            <svg id="eweZ5TFaPU21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 10" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="063ad19f5a774737becaeb804d9ba03a" export-id="4b31fb1702a6472eb73575de4527b4ce" cached="false"><rect width="7" height="2" rx="0" ry="0" transform="translate(2 4)" fill="#fff" stroke-width="0"/></svg>
            </button>
            {no_items}
            <button className="increment"><img src="src/assets/images/icon-increment-quantity.svg" alt="" /></button>
        </div>}
        <p>{item.category}</p>
        <p>{item.name}</p>
        <p>${item.price}</p>
    </div>
  )
}

export default MenuItem
