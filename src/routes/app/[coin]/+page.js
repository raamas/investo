export const load = async ({ fetch, params }) => {
	let response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.coin}`);
	let data = await response.json();

	console.log(data);
	return { ...data };
};
