import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import SHCard from '../SHCard';

import './Villains.css';

const Heros = () => {

  const history = useHistory();
  const {universe} = useParams();

  const [allSuperHumans, setAllSuperHumans] = useState('')
  const [villains, setVillains] = useState('');
  const [publisher, setPublisher] = useState('');
  
  // format the publisher name from the name of the universe to filter results
  useEffect(() => {
    const formatted = universe === 'Other' ? 'Other' : `${universe} Comics`;
    setPublisher(formatted);
  },[universe]);

  // fetch all supervillains, then filter it down to the appropriate list based on selections
  useEffect(() => {
    const fetchVillains = async() =>{
      const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      const allSupers = await response.json();
      setAllSuperHumans(allSupers);
    }
    if (!allSuperHumans) fetchVillains();
    if (!villains) {
      let selectSupers;
      if (publisher === 'Other'){
        selectSupers = allSuperHumans ? allSuperHumans.filter(villain => villain.biography.publisher !== 'DC Comics' && villain.biography.publisher !== 'Marvel Comics' && villain.biography.alignment === 'bad') : null;
      } else {
        selectSupers = allSuperHumans ? allSuperHumans.filter(villain => villain.biography.publisher === publisher && villain.biography.alignment === 'bad') : null;
      }
      setVillains(selectSupers)
    }
    console.log(allSuperHumans)
    console.log(villains)
  }, [allSuperHumans,publisher, villains]);

  const herosClick = () => {
    history.push(`/${universe}/heros`)
  }


  return (
    <div className='villains-page-wrapper'>
      <div className='alignment'>
        <div className='hero-toggle clickable' onClick={herosClick}>Hero</div>
        <div className='villain-active clickable'>Villain</div>
        <div className='filler'/>
      </div>
      <div className='villains-wrapper'>
        {villains && villains.map(villain => (
          <SHCard superhuman={villain} key={villain.id}/>
        ))}
      </div>
    </div>
  )
}

export default Heros;