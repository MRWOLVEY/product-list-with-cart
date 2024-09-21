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
      <div className="Desserts">
        <MenuItem item={transformedData[0]}/>
      </div>
      <div className="Cart"></div>
    </div>
  )
}

export default Menu
