import React from 'react'
import AboutUs from './components/About us/AboutUs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './sass/main.scss';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;
