import React from "react";
import { NavLink } from 'react-router-dom';

import './SHCard.css';

const SHCard = ({superhuman}) => {
  return (
    <div className='shcard-wrapper'>
      <NavLink className='link' to={`/superhumans/${superhuman.id}`}>
        <img className='shcard-image' src={superhuman.images.sm} alt='superhuman-pic-small'/>
        <div className='shcard-info'><div className='shcard-title'>Name :</div>{superhuman.name}</div>
        <div className='shcard-info'><div className='shcard-title'>Race :</div>{superhuman.appearance.race ? superhuman.appearance.race : 'N/A'}</div>
        <div className='shcard-info'><div className='shcard-title'>Publisher :</div>{superhuman.biography.publisher ? superhuman.biography.publisher : 'N/A'}</div>
      </NavLink>
    </div>
  )
};

export default SHCard;