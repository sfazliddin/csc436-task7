
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import Home from './components/Home';
import CurrentConversionRates from './components/CurrentConversionRates';
import ConvertCurrencies from './components/ConvertCurrencies';
import Carousel from './components/Carousel';


const App = () => {
  return (
    <div>
    {/* <Home />
    <ConvertCurrencies/> */}
    <CurrentConversionRates/>
    {/* <Carousel/> */}
    </div>
    
    );
    
}

export default App;
