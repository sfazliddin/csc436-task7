/* eslint-disable react/prop-types */
const BTCtoUSD = ({ convertBtcToUsd, setConvertBtcToUsd, conversionRates }) => {
	const rates = conversionRates;
	const btcToUsd = parseFloat(rates.USD.rate.replace(',', '')).toFixed(2);

	const btcToUsdHandler = (event) => {
		setConvertBtcToUsd(event.target.value * btcToUsd);
	};
	return (
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
	);
};

const BTCtoEUR = ({ convertBtcToEur, setConvertBtcToEur, conversionRates }) => {
	const rates = conversionRates;
	const btcToEur = parseFloat(rates.EUR.rate.replace(',', '')).toFixed(2);
	const btcToEurHandler = (event) => {
		setConvertBtcToEur(event.target.value * btcToEur);
	};
	return (
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
	);
};

const BTCtoGBP = ({ convertBtcToGbp, setConvertBtcToGbp, conversionRates }) => {
	const rates = conversionRates;

	const btcToGbp = parseFloat(rates.GBP.rate.replace(',', '')).toFixed(2);
	const btcToGbpHandler = (event) => {
		setConvertBtcToGbp(event.target.value * btcToGbp);
	};
	return (
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
	);
};

export { BTCtoUSD, BTCtoEUR, BTCtoGBP };
