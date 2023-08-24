import React from "react";
import ChefImg from "../assets/fogon-img/09.png";

export default function Chef() {
  return (
    <div id="chef-description">
      <p>
        C'est en Juillet 2022, à seulement l'âge de 23 ans, que Javier Meneses
        ouvre son restaurant bistronomique nommé Fogón. Cet ancien joueur de
        rugby de l'aviron Bayonnais d'origine Chilienne, ne cesse d'épater ses
        convives depuis qu'il se consacre entièrement à sa cuisine.
        <br /> <br />
        Javier vous invite à un voyage gastronomique où l'innovation et la
        tradition se rencontrent. C'est une expérience culinaire qui célèbre la
        passion des chefs pour les saveurs raffinées, les produits de qualité et
        l'art de la présentation.
      </p>
      <img src={ChefImg} alt="" />
    </div>
  );
}
