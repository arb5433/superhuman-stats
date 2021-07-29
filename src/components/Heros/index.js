import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import './Heros.css';

const Heros = () => {

  const history = useHistory();
  const {universe} = useParams();

  const [allSuperHumans, setAllSuperHumans] = useState('')
  const [heros, setHeros] = useState('');
  const [publisher, setPublisher] = useState('');
  
  // format the publisher name from the name of the universe to filter results
  useEffect(() => {
    const formatted = universe === 'Other' ? 'Other' : `${universe} Comics`;
    setPublisher(formatted);
    console.log('useEffect One')
  },[universe]);

  // fetch all superheros, then filer it down to the appropriate list based on selections
  useEffect(() => {
    const fetchHeros = async() =>{
      const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      const allSupers = await response.json();
      setAllSuperHumans(allSupers);
    }
    console.log('UseEffect 2')
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

  const villainClick = () => {
    history.push(`/${universe}/villains`)
  }


  return (
    <div>
      <div className='alignment'>
        <div className='hero-active'>Hero</div>
        <div className='villain-toggle' onClick={villainClick}>Villain</div>
      </div>
      {heros && heros.map(hero => (
        <div key={hero.id}>{hero.id}</div>
      ))}
    </div>
  )
}

export default Heros;