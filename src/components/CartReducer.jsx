import data from "../data.json"


const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}
const sumStrings = (arr) => {
    return arr.reduce((a, b) => Number(a) + Number(b), 0).toString()
}


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
        case "RESET_CART":
            return initial_state
        default:
            return state
    }
}
export default cartRedcuer
