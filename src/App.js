import React from 'react'
import AboutUs from './components/About us/AboutUs';
import Blank from './components/Blank/Blank';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Showcase from './components/Shocase/Showcase';
import './sass/main.scss';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Showcase/>
      <Blank/>
      <Portfolio/>
    </div>
  );
}

export default App;
