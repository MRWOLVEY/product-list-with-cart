import React, { useEffect } from 'react'
import placeHolder from '../assets/images/illustration-empty-cart.svg'

function CartDisplay({state,dispatch}) {

    useEffect(
        ()=>{
            console.log("update");
            dispatch({type:"UPDATE_CART"})
        },[state.items]
    )

    const reset_cart_item = (id) => {
        dispatch({type:"RESET_CART_ITEM",payload:{id:id}})
    }

    return (
        <div className='CartDis p-5 rounded block bg-white h-fit'>
            <h1 className='mb-6 text-lg font-bold text-[hsl(14_86%_42%)]'>Your Cart ({state.total_ni})</h1>
            {state.total_ni>0&&<div>
                {state.items.map((item,i)=>{
                    return (
                        item.no_items>0&&
                        <div className='border block' key={i}>
                            <div>{item.name}</div>
                            <div className='flex justify-between'>
                                <div className='inline'>
                                    {item.no_items}x ${item.unit_price} ${item.total_item_price}
                                </div>
                                <button onClick={()=>{reset_cart_item(i)}} className='w-fit h-fit p-[2px] border border-[#c9aea6] text-[#c9aea6] hover:border-[black] *:hover:text-black rounded-full transition duration-100'><svg className='w-2 h-2 fill-current transition duration-100' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className='' d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>
                            </div>
                        </div>
                    )
                })}
            <h1>Total Price: {state.total_price}</h1>
            </div>}
            {state.total_ni===0&&
            <div className='flex flex-col justify-around items-center'>
                <img className='w-[45%]' src={placeHolder} alt="" />
                <span className='text-center p-4'><h1 className='text-xs text-[hsl(12_20%_44%)] font-semibold'>Your added items will appear here</h1></span>
            </div>}
        </div>
    )
    }

export default CartDisplay
