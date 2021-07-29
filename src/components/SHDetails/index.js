import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './SHDetails.css';

const SHDetails = () => {
  const history = useHistory();
  const {id} = useParams();

  const [superhuman, setSuperhuman] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  // fetch the data for the specific superhuman
  useEffect(() => {
    const fetchSuper = async() => {
      const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
      const superPerson = await response.json();
      setSuperhuman(superPerson);
    }
    if (!superhuman) fetchSuper();
  }, [superhuman, id]);

  // set the color of the page based on the alignment of the superhuman
  useEffect(() => {
    if (superhuman) {
      const primColor = superhuman.biography.alignment === 'bad' ? 'darkred' : 'darkblue';
      const secColor = superhuman.biography.alignment === 'bad' ? 'red' : 'blue';
      setPrimaryColor(primColor);
      setSecondaryColor(secColor);
    }
  },[superhuman]);

  const nextClick = () => {
    const newId = Number(id) + 1;
    setSuperhuman('')
    history.push(`/superhumans/${newId}`)
  }

  const prevClick = () => {
    const newId = id - 1;
    setSuperhuman('')
    history.push(`/superhumans/${newId}`)
  }


  return (
    <>
      {superhuman && (
        <div className='display-page-wrapper'>
          <div className='top-wrapper'>
            <img className='superhuman-image' src={superhuman.images.md} alt='superhuman-pic-med'/>
            <div className='stats' style={{background: `linear-gradient(${primaryColor}, ${secondaryColor})`}}>
              <div className='name-title'>{superhuman.name}</div>
              <div className='stats-info-wrapper'>
                <div className='stats-info'><div className='stats-title'>Intelligence :</div>{superhuman.powerstats.intelligence}</div>
                <div className='stats-info'><div className='stats-title'>Strength :</div>{superhuman.powerstats.strength}</div>
                <div className='stats-info'><div className='stats-title'>Speed :</div>{superhuman.powerstats.speed}</div>
                <div className='stats-info'><div className='stats-title'>Durability :</div>{superhuman.powerstats.durability}</div>
                <div className='stats-info'><div className='stats-title'>Power :</div>{superhuman.powerstats.power}</div>
                <div className='stats-info'><div className='stats-title'>Combat :</div>{superhuman.powerstats.combat}</div>
              </div>
            </div>
          </div>
          <div className='additional-info-wrapper' style={{background: `linear-gradient(${secondaryColor}, ${primaryColor})`}}>
            <div className='bio-general-title'>Additional Information</div>
              <div className='bio-info'>
                <div className='bio-title'>Full Name :</div>
                <div className='bio-body'>{superhuman.biography.fullName ? superhuman.biography.fullName : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>Place of Birth :</div>
                <div className='bio-body'>{superhuman.biography.placeOfBirth ? superhuman.biography.placeOfBirth : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>First Appearance :</div>
                <div className='bio-body'>{superhuman.biography.firstAppearance ? superhuman.biography.firstAppearance : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>Publisher :</div>
                <div className='bio-body'>{superhuman.biography.publisher ? superhuman.biography.publisher : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>Alignment :</div>
                <div className='bio-body'>{superhuman.biography.alignment ? superhuman.biography.alignment.replace(/^\w/, letter => letter.toUpperCase()) : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>Job :</div>
                <div className='bio-body'>{superhuman.work.occupation ? superhuman.work.occupation : 'Not Available'}</div>
              </div>
              <div className='bio-info'>
                <div className='bio-title'>Affiliations :</div>
                <div className='bio-body'>{superhuman.connections.groupAffiliation ? superhuman.connections.groupAffiliation : 'Not Available'}</div>
              </div>
          </div>
        </div>
      )}
      {!superhuman && (<div className='error'>Whoops! No superhuman assigned to that id, please either continue browsing or click the banner at the top to narrow your searches.</div>)}
      <div className='navigation-btns'>
        <div className='clickable nav-btn' onClick={prevClick}>Previous</div>
        <div className='clickable nav-btn' onClick={nextClick}>Next</div>
      </div>
    </>
  )
}

export default SHDetails;