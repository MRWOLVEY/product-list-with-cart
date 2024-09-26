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
        default:
            return state
    }
}
export default cartRedcuer
