import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BTCtoEUR, BTCtoGBP, BTCtoUSD } from './FromBTC';
import { EURtoBTC, GBPtoBTC, USDtoBTC } from './ToBTC';

const BitcoinConverter = () => {
	const [conversionRates, setConversionRates] = useState(null);
	const [convertUsdToBtc, setConvertUsdToBtc] = useState(0);
	const [convertBtcToUsd, setConvertBtcToUsd] = useState(0);
	const [convertEurToBtc, setConvertEurToBtc] = useState(0);
	const [convertBtcToEur, setConvertBtcToEur] = useState(0);
	const [convertGbpToBtc, setConvertGbpToBtc] = useState(0);
	const [convertBtcToGbp, setConvertBtcToGbp] = useState(0);

	//fetch currency data from API
	useEffect(() => {
		async function fetchConversionRates() {
			const response = await fetch(
				'https://api.coindesk.com/v1/bpi/currentprice.json'
			);
			const data = await response.json();
			setConversionRates(data.bpi);
		}

		fetchConversionRates();
	}, []);

	if (!conversionRates) {
		return <p>Loading...</p>;
	}

	return (
		<div className="carousel-wrapper">
			<h1 style={{ display: 'flex', justifyContent: 'center' }}>
				Bitcoin Conversion
			</h1>
			<br />
			<Carousel
				infiniteLoop
				useKeyboardArrows
				centerMode={true}
				showThumbs={false}
			>
				{/* USD to BTC Conversion */}
				<USDtoBTC
					convertUsdToBtc={convertUsdToBtc}
					setConvertUsdToBtc={setConvertUsdToBtc}
					conversionRates={conversionRates}
				/>

				{/* BTC to USD Conversion */}
				<BTCtoUSD
					convertBtcToUsd={convertBtcToUsd}
					setConvertBtcToUsd={setConvertBtcToUsd}
					conversionRates={conversionRates}
				/>

				{/* EUR to BTC Conversion */}
				<EURtoBTC
					convertEurToBtc={convertEurToBtc}
					setConvertEurToBtc={setConvertEurToBtc}
					conversionRates={conversionRates}
				/>

				{/* BTC to EUR Conversion */}
				<BTCtoEUR
					convertBtcToEur={convertBtcToEur}
					setConvertBtcToEur={setConvertBtcToEur}
					conversionRates={conversionRates}
				/>

				{/* GBP to BTC Conversion */}
				<GBPtoBTC
					convertGbpToBtc={convertGbpToBtc}
					setConvertGbpToBtc={setConvertGbpToBtc}
					conversionRates={conversionRates}
				/>

				{/* BTC to GBP Conversion */}
				<BTCtoGBP
					convertBtcToGbp={convertBtcToGbp}
					setConvertBtcToGbp={setConvertBtcToGbp}
					conversionRates={conversionRates}
				/>
			</Carousel>
		</div>
	);
};

export default BitcoinConverter;
