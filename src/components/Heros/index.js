import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import './Heros.css';

const Heros = () => {
  const history = useHistory();
  const {universe} = useParams();
  const [heros, setHeros] = useState('');

  useEffect(() => {
    const fetchHeros = async() =>{
      const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      // console.log(response, 'res');
      const allSupers = await response.json();
      // console.log(allSupers,'all')
      setHeros(allSupers)
    }
    fetchHeros()
  }, [])


  return (
    <div>
      <div>Heros Tests</div>
      {heros && heros.map(hero => (
        <div>{hero.id}</div>
      ))}
    </div>
  )
}

export default Heros;