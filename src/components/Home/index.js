import React from 'react';
import { useHistory } from 'react-router-dom';


import './Home.css';

const Home = () => {
  const history = useHistory();

  // onClick handlers
  const marvelClick = () => {
    window.scrollTo(0, 0)
    history.push('/Marvel/heros');
  }

  const dcClick = () => {
    window.scrollTo(0, 0)
    history.push('/DC/heros');
  }

  const otherClick = () => {
    window.scrollTo(0, 0)
    history.push('/Other/heros');
  }

  // scrolling the window to the top on a banner click ensures that they reach the cards page for the first time at the top, without hindering the fluidity of changing between tabs when on the cards page.

  return (
    <div className='home-wrapper'>
      <div className='marvel-banner' onClick={marvelClick}/>
      <div className='dc-banner' onClick={dcClick}/>
      <div className='other-banner' onClick={otherClick}/>
    </div>
  )
}

export default Home;