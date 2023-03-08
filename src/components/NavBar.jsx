import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CurrentConversionRates from './CurrentConversionRates';
import ConvertCurrencies from './ConvertCurrencies';



const MyNavbar=()=> {
  return ( <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Currency Converter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <link className="nav-link active"  to='/Home' >Home
            <span className="visually-hidden">(current)</span>
          </link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to='/ConversionRates'>Current Conversion Rates</link>
        </li>
        <li className="nav-item">
          <link className="nav-link"  to='/ConvertCurrencies'>Convert Currencies</link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
<Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/ConversionRates" component={CurrentConversionRates} />
        <Route path="/ConvertCurrencies" component={ConvertCurrencies} />
      </Switch>
</div>
  );
}

export default MyNavbar;