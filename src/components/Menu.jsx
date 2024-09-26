import React from 'react'
import MenuItem from './MenuItem'
import data from '../data.json'

function Menu({state,dispatch}) { 

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

  return (
    <div className='block p-8 w-fit'>
      <h1 className='text-3xl mb-4 font-bold'>Desserts</h1>
      <div className="Desserts grid grid-cols-3 gap-4 w-fit">
        {transformedData.map((item,i)=>{
          return <MenuItem item={item} key={i} id={i} state={state} dispatch={dispatch}/>
        })}
      </div>
      <div className="Cart"></div>
    </div>
  )
}

export default Menu
