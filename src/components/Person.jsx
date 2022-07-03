import React from 'react';
import { useState } from 'react';
import "./person.css"

const Person = ({data}) => { 
    const {id,name,image,birthday,age}=data;
  console.log(typeof data);
//   console.log(name);
const [visible,setVisible]=useState(true);

const handleClick = ()=>{
    setVisible(!visible)
}
  return (
    <div>
        {
            visible ?
            <div className='firstDiv'>
                <img onClick={handleClick} src={image} alt="" />
            </div>
            :
            <div className='card'>
                <div>
                    <img onClick={handleClick} src={image} alt="" />
                </div>
                <div >
                    <h2>{name}</h2>
                    <h3>{age}</h3>
                    <h3>{birthday}</h3>
                </div>
            </div>
        }
    </div>
  )
}

export default Person

