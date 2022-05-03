import { Link } from "react-router-dom";
import Main from "../../Pages/Main";
import Abouts from "./../../Pages/About";
import ExtraDeck from "./../../Pages/ExtraDeck";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Deck from './../../Pages/Deck'
function Rotas() {
  return (
    <BrowserRouter>
      <nav>
        <div className="routa">
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/Sobre">Sobre</Link>
          </button>
          <button>
            <Link to="/ExtraDeck">Extra Deck</Link>{" "}
          </button>
          <button>
            <Link to="/Deck">Deck</Link>{" "}
          </button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sobre" element={<Abouts />} />
        <Route path="/ExtraDeck" element={<ExtraDeck />} />
        <Route path="/Deck" element={<Deck />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
