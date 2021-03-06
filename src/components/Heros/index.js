import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import SHCard from '../SHCard';

import './Heros.css';

const Heros = () => {

  const history = useHistory();
  const {universe} = useParams();

  const [allSuperHumans, setAllSuperHumans] = useState('')
  // save the master list and the filtered list in different slices of state so that we don't alter the master list
  const [heros, setHeros] = useState('');
  const [publisher, setPublisher] = useState('');
  
  // format the publisher name from the name of the universe to filter results
  useEffect(() => {
    const formatted = universe === 'Other' ? 'Other' : `${universe} Comics`;
    setPublisher(formatted);
  },[universe]);

  // fetch all superheros, then filer it down to the appropriate list based on selections
  useEffect(() => {
    const fetchHeros = async() =>{
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
      const allSupers = await response.json();
      setAllSuperHumans(allSupers);
    }
    if (!allSuperHumans) fetchHeros();
    if (!heros) {
      let selectSupers;
      if (publisher === 'Other'){
        selectSupers = allSuperHumans ? allSuperHumans.filter(hero => hero.biography.publisher !== 'DC Comics' && hero.biography.publisher !== 'Marvel Comics' && hero.biography.alignment === 'good') : null;
      } else {
        selectSupers = allSuperHumans ? allSuperHumans.filter(hero => hero.biography.publisher === publisher && hero.biography.alignment === 'good') : null;
      }
      setHeros(selectSupers)
    }
  }, [allSuperHumans,publisher, heros]);

  // onClick handler
  const villainClick = () => {
    history.push(`/${universe}/villains`)
  }

  return (
    <div className='heros-page-wrapper'>
      <div className='alignment'>
        <div className='hero-active clickable'>Hero</div>
        <div className='villain-toggle clickable' onClick={villainClick}>Villain</div>
        <div className='filler'/>
      </div>
      <div className='heros-wrapper'>
        {heros && heros.map(hero => (
          <SHCard superhuman={hero} key={hero.id}/>
        ))}
      </div>
    </div>
  )
}

export default Heros;