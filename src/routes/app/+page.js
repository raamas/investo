export const load = async ({ params, fetch }) => {
	let headers = new Headers();
	headers.append('x-cg-demo-api-key', 'CG-kEGJyr6Q6JmNXwdeATYb6rzn');
	let response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
		method: 'GET',
		headers: headers
	});
	let info = await response.json();
	return { ...info };
};
