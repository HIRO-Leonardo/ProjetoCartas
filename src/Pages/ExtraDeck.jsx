import React from "react";

import Heatleo from "../components/imgs/SalamangreatHeatleo.webp";
import Wolf from "../components/imgs/SalamangreatSunlightWolf.webp";
import Quimera from "../components/imgs/SalamangreatVioletChimera.webp";
import "./ExtraDeck.css";
import Miragestallio from "../components/imgs/SalamangreatMiragestallio.webp";
import SalamangreatBalelynx from '../components/imgs/SalamangreatBalelynx.webp'
function ExtraDeck() {
  return (
    <>
      <h1>Vamos falar sobre as Cartas do arquetipo usada no Extradeck(não significa que sao udsados realmente no deck )  </h1>
      <aside className="salamangreat">
          <div className="container">
        <table border="0" className="Table">
            <tr>
                <td>Salamangreat Heatleo</td>
                <td>Salamangreat Wolf</td>
                <td>Salamangreat Quimera</td>
                <td>Salamangreat Miragestallio</td>
                <td>Salamangreat Balelynx</td>
            </tr>

          <tr>
            <th>
              <img src={Heatleo} alt="Heatleo" />
            </th>
            <th>
              <img src={Wolf} alt="Wolf" />
            </th>
            <th>
              <img src={Quimera} alt="Quimera" />
            </th>
            <th>
              <img src={Miragestallio} alt="Miragestallio" />
            </th>
            <th>
              <img src={ SalamangreatBalelynx} alt=" SalamangreatBalelynx" />
            </th>
            
          </tr>
        </table>
        </div>
      </aside>
    </>
  );
}

export default ExtraDeck;
