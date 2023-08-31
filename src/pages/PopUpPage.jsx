import React from "react";
import Group from "../assets/fogon-img/popup/group.jpeg";

export default function PopUpPage() {
  return (
    <div id="PopUp">
      <img src={Group} alt="" className="popUpImg" />

      <div className="introPopUp">
        <div className="introPopUp-description">
          <h1>Qu'est ce qu'un pop-up ?</h1>
          <p>
            Un "pop-up" est un concept de restaurant éphémère qui apparaît
            temporairement dans un lieu donné, souvent pour une courte période
            allant de quelques jours à quelques semaines. Les pop-ups sont
            généralement créés pour offrir une expérience culinaire unique et
            innovante, pour tester de nouvelles idées ou pour célébrer des
            événements spéciaux.
            <br /> <br />A l'occasion de notre dernier Pop-up, nous avons pu créer une
            expérience unique et mémorable pour nos clients tout en permettant
            aux chefs et aux restaurateurs d'explorer de nouvelles idées et
            perspectives ainsi qu'a stimuler l'innovation dans le secteur de la
            restauration.
          </p>
        </div>
      </div>

      <section id="chefsPopUp">
        <h2>Les chefs présents à notre dernier Pop-up</h2>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </section>
    </div>
  );
}
