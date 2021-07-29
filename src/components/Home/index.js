import React from 'react';
import { useHistory } from 'react-router-dom';


import './Home.css';

const Home = () => {
  const history = useHistory();

  const marvelClick = () => {
    history.push('/marvel/heros')
  }

  const dcClick = () => {
    history.push('/dc/heros')
  }

  return (
    <div className='home-wrapper'>
      <div className='marvel-banner' onClick={marvelClick}>This will be the marvel banner</div>
      <div className='dc-banner' onClick={dcClick}>This will be the dc banner</div>
    </div>
  )
}

export default Home;