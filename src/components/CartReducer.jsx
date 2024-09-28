import data from "../data.json"


const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}

const cartRedcuer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                total_ni:state.total_ni+1,
                items:state.items.map((item,index)=>{
                    if(index==action.payload.id){
                        item.no_items+=1
                        item.total_item_price+=item.unit_price
                    }
                    return item
                })
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                total_ni:state.total_ni-1,
                items:state.items.map((item,index)=>{
                    if(index==action.payload.id){
                        item.no_items-=1
                        item.total_item_price-=item.unit_price
                    }
                    return item
                })
            }
        case "UPDATE_CART":
            return{
                ...state,
                total_ni:sum(state.items.map((item)=>{
                    return item.no_items
                })),
                total_price:sum(state.items.map((item)=>{
                    return item.total_item_price
                }))
            }
        case "RESET_CART_ITEM":
            return{
                ...state,
                items:state.items.map((item,index)=>{
                    if(index==action.payload.id){
                        item.no_items=0
                        item.total_item_price=0
                    }
                    return item
                })
            }
        default:
            return state
    }
}
export default cartRedcuer
