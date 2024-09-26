import React, { useEffect } from 'react'

function CartDisplay({state,dispatch}) {

    useEffect(
        ()=>{
            console.log("update");
            dispatch({type:"UPDATE_CART"})
        },[state.items]
    )

    return (
        <div className='CartDis p-8 block'>
            <h1>Your Cart ({state.total_ni})</h1>
            {state.items.map((item,i)=>{
                return (
                    item.no_items>0&&
                    <div className='border block' key={i}>
                        <div>{item.name}</div>
                        <div className='inline'>
                            {item.no_items}x ${item.unit_price} ${item.total_item_price}
                        </div>
                    </div>
                )
            })}
            <h1>Total Price: {state.total_price}</h1>
        </div>
    )
    }

export default CartDisplay
