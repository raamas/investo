import { supabase } from '$lib/supabaseClient.js';

export const load = async ({ fetch, params }) => {
	let response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.coin}`, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'x-cg-demo-api-key': 'CG-kEGJyr6Q6JmNXwdeATYb6rzn'
		}
	});
	let data = await response.json();
	let currentDate = Math.floor(Date.now() / 1000);
	let lastYear = Math.floor(currentDate - 365 * 24 * 60 * 60);

	let url = `https://api.coingecko.com/api/v3/coins/${params.coin}/market_chart/range?vs_currency=usd&from=${lastYear}&to=${currentDate}`;
	let chartResponse = await fetch(url);
	console.log(url);

	let chart = await chartResponse.json();
	console.log(chart.prices.length);

	let prices = [];

	for (let i = 0; i < 12; i++) {
		let month;
		month = new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000);

		let element = {
			month: new Date(month.getFullYear(), month.getMonth(), 1),
			price: chart.prices[i * 30][1]
		};
		console.log(element);
		prices.push(element);
	}

	prices = prices.reverse();
	data.chart = prices;
	console.log(params);
	// data.isTracked = checkTracked(params.coin, params.data);
	data.isTracked = true;
	return { ...data };
};
