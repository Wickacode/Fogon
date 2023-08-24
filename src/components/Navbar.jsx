import React from 'react'
import FogonLogo from '../assets/fogon-img/fogon.png'

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <img src={FogonLogo} alt="" />
        <ul>
            <li>Accueil</li>
            <li>Menu</li>
            <li>Réservation</li>
            <li>Contact</li>
            
            <span className='contact-number'>
        <i class="fa-solid fa-phone"></i>
        05 59 01 70 95
        </span>
        </ul>
        
      </nav>
    </div>
  )
}
