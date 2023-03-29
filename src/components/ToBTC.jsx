/* eslint-disable react/prop-types */
const USDtoBTC = ({ convertUsdToBtc, setConvertUsdToBtc, conversionRates }) => {
	const rates = conversionRates;
	const usdToBtc = (1 / parseFloat(rates.USD.rate.replace(',', ''))).toFixed(6);
	const usdToBtcHandler = (event) => {
		setConvertUsdToBtc(event.target.value * usdToBtc);
	};
	return (
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
	);
};

const EURtoBTC = ({ convertEurToBtc, setConvertEurToBtc, conversionRates }) => {
	const rates = conversionRates;
	const eurToBtc = (1 / parseFloat(rates.EUR.rate.replace(',', ''))).toFixed(6);

	const eurToBtcHandler = (event) => {
		setConvertEurToBtc(event.target.value * eurToBtc);
	};
	return (
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
	);
};

const GBPtoBTC = ({ convertGbpToBtc, setConvertGbpToBtc, conversionRates }) => {
	const rates = conversionRates;
	const gbpToBtc = (1 / parseFloat(rates.GBP.rate.replace(',', ''))).toFixed(6);

	const gbpToBtcHandler = (event) => {
		setConvertGbpToBtc(event.target.value * gbpToBtc);
	};

	return (
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
	);
};

export { USDtoBTC, EURtoBTC, GBPtoBTC };
