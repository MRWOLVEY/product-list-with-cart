import React, { useEffect, useState } from 'react'
import placeHolder from '../assets/images/illustration-empty-cart.svg'
import Modal from './Modal';

function CartDisplay({state,dispatch,data}) {

    const [modal,setModal]=useState(false);

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
        <div className='CartDis p-5 rounded-md block bg-white h-fit min-w-72'>
            <h1 className='mb-4 text-lg font-bold text-[hsl(14_86%_42%)]'>Your Cart ({state.total_ni})</h1>
            {state.total_ni>0&&<div className=''>
                {state.items.map((item,i)=>{
                    return (
                        item.no_items>0&&
                        <div className='border-b flex justify-between p-1' key={i}>
                            <div className='block text-xs'>
                                <h1 className='font-semibold mb-2'>{item.name}</h1>
                                <div className='flex gap-2'>
                                    <span className='text-[#C73A0F] font-semibold'>{item.no_items}x</span>
                                    <span className='text-[hsl(14_25%_72%)] font-medium'>@ ${item.unit_price.toFixed(2)}</span>
                                    <span className='text-[hsl(7_20%_60%)] font-semibold'>${item.total_item_price.toFixed(2)}</span>
                                </div>
                            </div>
                            <span className='flex items-center'><button onClick={()=>{reset_cart_item(i)}} className='w-fit h-fit p-[2px] border border-[#c9aea6] text-[#c9aea6] hover:border-[black] *:hover:text-black rounded-full transition duration-150'><svg className='w-2 h-2 fill-current transition duration-100' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className='' d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button></span>
                        </div>
                    )
                })}
            <div className='flex justify-between h-12'><h1 className='text-xs font-semibold flex items-center'>Order Total</h1><span className='text-lg font-bold flex items-center'>${state.total_price.toFixed(2)}</span></div>
            <div className='mb-4 w-full h-12 text-xs bg-[hsl(20_50%_98%)] flex items-center justify-center rounded-md'> 
                <span className='flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                this is a <span className='font-semibold'>carbon-neutral</span> delivery</span></div>
                <span className='flex justify-center w-full'><button onClick={() => {setModal(true)}} className='bg-[hsl(14_86%_42%)] w-[90%] h-10 rounded-full text-xs text-white font-semibold hover:bg-[hsl(14_86%_37%)] transition-all'>Confirm Order</button></span>
                {modal&&<Modal state={state} data={data} dispatch={dispatch} setModal={setModal}/>}
            </div>}
            {state.total_ni===0&&
            <div className='flex flex-col justify-around items-center'>
                <img className='w-[45%]' src={placeHolder} alt="" />
                <span className='text-center p-4'><h1 className='text-xs text-[hsl(12_20%_44%)] font-semibold'>Your added items will appear here</h1></span>
                {/* <Modal state={state} data={data}/> */}
            </div>}
        </div>
    )
    }

export default CartDisplay
