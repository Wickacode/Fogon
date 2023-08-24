import React from 'react'
import Aldabia from "../assets/producteurs-locaux/aldabia.png"
import BioPaysLandais from "../assets/producteurs-locaux/bio-pays-landais.png"
import Brana from "../assets/producteurs-locaux/brana.png"
import Dima from "../assets/producteurs-locaux/dima.png"
import LaSuperbe from "../assets/producteurs-locaux/la-superbe.jpg"
import Lait2Fromagers from "../assets/producteurs-locaux/lait-2-fromagers.png"
import LaiterieMarengo from "../assets/producteurs-locaux/laiterie-marengo.png"


function Locaux() {
  return (
    <div id='locaux'>
        <h1>Nos producteurs locaux</h1>

        <div className='locaux-enseignes'>
            <a href="https://aldabia.fr/" target="_blank"><img src={Aldabia} alt="" /></a>
            <a href="https://bio-pays-landais.com/" target="_blank"><img src={BioPaysLandais} alt="" /></a>
            <a href="https://www.brana.fr/" target="_blank"><img src={Brana} alt="" /></a>
            <a href="https://www.dima.fr/" target="_blank"><img src={Dima} alt="" /></a>
            <a href="https://www.facebook.com/lasuperbebiarritz/?locale=fr_FR" target="_blank"><img src={LaSuperbe} alt="" /></a>
            <a href="https://www.lait2fromagers.fr/" target="_blank"><img src={Lait2Fromagers} alt="" /></a>
            <a href="https://www.facebook.com/LaiterieMarengo" target="_blank"><img src={LaiterieMarengo} alt="" /></a>
        </div>
      
    </div>
  )
}

export default Locaux
