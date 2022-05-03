import React from "react";
import "./App.css";

import Logo from './components/layouts/logo'
import Header from'./components/layouts/Header'
import Rotas from './components/layouts/Router'
import Footer from './components/layouts/Footar'

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
     <Rotas />
      <Footer  />
    </div>
  );
}

export default App;
