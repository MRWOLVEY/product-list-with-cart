import React from 'react'
import MenuItem from './MenuItem'
import data from '../data.json'

function Menu() {

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
    <div>
      <div className="Desserts p-8 grid grid-cols-3 gap-4 w-fit">
        {transformedData.map((item)=>{
          return <MenuItem item={item} key={item.name}/>
        })}
      </div>
      <div className="Cart"></div>
    </div>
  )
}

export default Menu
