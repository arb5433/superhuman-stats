import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './SHDetails.css';

const SHDetails = ({ids}) => {
  const history = useHistory();
  const {id} = useParams();

  const [superhuman, setSuperhuman] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [reference, setReference] = useState('')

  // the very first render of the page will ensure that the app is scrolled to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  // fetch the data for the specific superhuman
  useEffect(() => {
    const fetchSuper = async() => {
      const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
      // tried using the cached CDN for the id routes and it seemed to have more lag then
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

  // utilizing props passed down on click events we can limit the amount of times that we need to fetch
  // this is setting up a reference list of ids so that we will not hit a id without any data while scrolling
  useEffect(() => {
    if (!ids){
      const fetchAllIds = async() => {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
        const allSupers = await response.json();
        setReference(allSupers.map(superhuman => superhuman.id))
      }
      if (!reference) fetchAllIds();
    }
  },[ids, reference])

  // onClick handlers
  const nextClick = () => {
    let newId = Number(id) + 1;
    if (newId > 731) newId = 1;
    // simple while statements to help ensure that we dont get blank data
    while (!reference.includes(newId) && newId <= 731){
      newId++;
    }
    
    setSuperhuman('')
    history.push(`/superhumans/${newId}`, ids={reference})
  }

  const prevClick = () => {
    let newId = id - 1;
    if (newId < 1) newId = 731;
    while(!reference.includes(newId) && newId >= 1){
      newId--;
    }
    setSuperhuman('')
    history.push(`/superhumans/${newId}`, ids=reference)
  }
  // need to fix the issue where you can scroll over or under
  // add simple logic to tell when the id is greater then or less then the bounds
  // if the id is greater then or less then reset the id to the opp bound
  // this should create the circular effect desired

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
      <div className='navigation-btns'>
        <div className='clickable nav-btn' id='prev' onClick={prevClick}>Previous</div>
        <div className='clickable nav-btn' id='next' onClick={nextClick}>Next</div>
      </div>
    </>
  )
}

export default SHDetails;