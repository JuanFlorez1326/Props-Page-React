import React from 'react';
import  image  from '../../../Images/classic.jpg'
import './Image.css'; 


export const Image = () => {
  return(
      <div className='img_container'>
          <img src={ image } alt="image"></img>
      </div>
  )
};
