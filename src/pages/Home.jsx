import React from "react";
import home01 from ".././assets/fogon-img/06.png";
import home02 from ".././assets/fogon-img/14.png";
import home03 from ".././assets/fogon-img/07.png";

export default function Home() {
  return (
    <div>
      <section id="home">
        <img src={home01} alt="" />
        <img src={home02} alt="" />
        <img src={home03} alt="" />
      </section>
      <section id="restaurant-description">
        <div className="description">
          <h1>Le restaurant Fogón</h1>
          <p>
            Dans ce cadre convivial et raffiné, les convives ont l'opportunité
            de savourer une expérience culinaire unique, alliant l'authenticité
            des plats classiques avec des touches innovantes et audacieuses. <br /><br /> Le
            restaurant Fogón vous offre une diversité de mets exquis, mettant en
            valeur les produits frais et de saison. Les plats sont préparés avec
            une grande attention aux détails, alliant technique et savoir-faire
            pour créer des associations de goûts surprenantes. <br /><br /> Les chefs de cet
            établissement jouent avec les textures, les couleurs et les
            présentations pour offrir une expérience visuelle et gustative
            mémorable à leurs convives.
          </p>
        </div>
        {/* <div>
          <img src={platFogon} alt="" />
        </div> */}
      </section>
    </div>
  );
}
