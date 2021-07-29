import React from "react";
import { NavLink } from 'react-router-dom';

const SHCard = ({superhuman}) => {
  return (
    <NavLink className='shcard-wrapper' to={`/superhumans/${superhuman.id}`}>
      <img className='shcard-image' src={superhuman.images.sm} alt='superhuman-pic-small'/>
      <div className='shcard-name'>{`Name : ${superhuman.name}`}</div>
      <div className='shcard-appearance'>{superhuman.biography.firstAppearance}</div>
      <div className='shcard-publisher'>{superhuman.biography.publisher}</div>
    </NavLink>
  )
};

export default SHCard;