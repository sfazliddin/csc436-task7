import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BitcoinConverter = () => {
  const [conversionRates, setConversionRates] = useState(null);
  const [convertUsdToBtc, setConvertUsdToBtc] = useState(null);
  const [convertBtcToUsd, setConvertBtcToUsd] = useState(null);
  const [convertEurToBtc, setConvertEurToBtc] = useState(null);
  const [convertBtcToEur, setConvertBtcToEur] = useState(null);
  const [convertGbpToBtc, setConvertGbpToBtc] = useState(null);
  const [convertBtcToGbp, setConvertBtcToGbp] = useState(null);

  const usdToBtcHandler = (event) => {
    setConvertUsdToBtc(event.target.value * usdToBtc);
  };
  const btcToUsdHandler = (event) => {
    setConvertBtcToUsd(event.target.value * btcToUsd);
  };

  const eurToBtcHandler = (event) => {
    setConvertEurToBtc(event.target.value * eurToBtc);
  };
  const btcToEurHandler = (event) => {
    setConvertBtcToEur(event.target.value * btcToEur);
  };
  const gbpToBtcHandler = (event) => {
    setConvertGbpToBtc(event.target.value * gbpToBtc);
  };
  const btcToGbpHandler = (event) => {
    setConvertBtcToGbp(event.target.value * btcToGbp);
  };

  useEffect(() => {
    async function fetchConversionRates() {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      setConversionRates(data.bpi);
    }

    fetchConversionRates();
  }, []);

  if (!conversionRates) {
    return <p>Loading...</p>;
  }
  const btcToUsd = parseFloat(
    conversionRates.USD.rate.replace(",", "")
  ).toFixed(2);
  const btcToEur = parseFloat(
    conversionRates.EUR.rate.replace(",", "")
  ).toFixed(2);
  const btcToGbp = parseFloat(
    conversionRates.GBP.rate.replace(",", "")
  ).toFixed(2);
  const usdToBtc = (1 / btcToUsd).toFixed(6);
  const eurToBtc = (1 / btcToEur).toFixed(6);
  const gbpToBtc = (1 / btcToGbp).toFixed(6);

  return (
    <div className="carousel-wrapper">
      <h1 style={{display:'flex', justifyContent:'center'}}>Bitcoin Conversion</h1>
      <br />
      <Carousel
        infiniteLoop
        useKeyboardArrows
        centerMode={true}
        showThumbs={false}
      >
        <div>
          <h3>1 USD = {usdToBtc} BTC</h3>
          <label htmlFor="convertFromUsdToBtc">$</label>
          <input
            type="number"
            id="convertUsdToBtc"
            name="convertUsdToBtc"
            onChange={usdToBtcHandler}
          />

          <br />
          <p>₿{convertUsdToBtc}</p>
        </div>
        <div>
          <h3>1 BTC = {btcToUsd} USD</h3>
          <label htmlFor="convertFromBtcToUsd">₿</label>
          <input
            type="number"
            id="convertBtcToUsd"
            name="convertBtcToUsd"
            onChange={btcToUsdHandler}
          />

          <br />
          <p>${convertBtcToUsd}</p>
          <br />
          
          
        </div>
        <div>
          <h3>1 EUR = {eurToBtc} BTC</h3>
          <label htmlFor="convertFromEurToBtc">€</label>
          <input
            type="number"
            id="convertEurToBtc"
            name="convertEurToBtc"
            onChange={eurToBtcHandler}
          />

          <br />
          <p>₿{convertEurToBtc}</p>
        </div>
        <div>
          <h3>1 BTC = {btcToEur} EUR</h3>
          <label htmlFor="convertFromBtcToEur">₿</label>
          <input
            type="number"
            id="convertBtcToEur"
            name="convertBtcToEur"
            onChange={btcToEurHandler}
          />

          <br />
          <p>€{convertBtcToEur}</p>
        </div>
        <div>
          <h3>1 GBP = {gbpToBtc} BTC</h3>
          <label htmlFor="convertFromGbpToBtc">£</label>
          <input
            type="number"
            id="convertGbpToBtc"
            name="convertGbpToBtc"
            onChange={gbpToBtcHandler}
          />

          <br />
          <p>₿{convertGbpToBtc}</p>
        </div>
        <div>
          <h3>1 BTC = {btcToGbp} GBP</h3>
          <label htmlFor="convertFromBtcToGbp">₿</label>
          <input
            type="number"
            id="convertBtcToGbp"
            name="convertBtcToGbp"
            onChange={btcToGbpHandler}
          />

          <br />
          <p>£{convertBtcToGbp}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default BitcoinConverter;
