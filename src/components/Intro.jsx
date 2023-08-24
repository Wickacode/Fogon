import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCarrot, faChampagneGlasses, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    return (
      <div id='intro'>
        <div className='intro-details'>
          <FontAwesomeIcon icon={faUtensils} className='icone'/>
          <span>Une cuisine <br /> <strong>saine et gouteuse</strong></span>
        </div>
        <div className='intro-details'>
          <FontAwesomeIcon icon={faCarrot} className='icone'/>
          <span>Des produits <br /> <strong>frais et locaux</strong></span>
        </div>
        <div className='intro-details'>
          <FontAwesomeIcon icon={faChampagneGlasses} className='icone'/>
          <span>Un lieu convivial<br /> <strong>et chalereux</strong></span>
        </div>
        <div className='intro-details'>
          <FontAwesomeIcon icon={faCakeCandles} className='icone'/>
          <span>Des évènements<br /> <strong>inoubliables !</strong></span>
        </div>
      </div>
    );
  }