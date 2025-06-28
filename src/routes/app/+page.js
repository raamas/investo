export const load = async ({ params, fetch }) => {
	let response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'x-cg-demo-api-key': 'CG-kEGJyr6Q6JmNXwdeATYb6rzn'
		}
	});
	let info = await response.json();
	return { ...info };
};
