import { supabase } from '$lib/supabaseClient';

export const load = async ({ params }) => {
	const { id } = params;

	// Fetch user data from Supabase
	const { data: user, error } = await supabase.from('users').select().eq('id', id).maybeSingle();

	if (error) {
		console.error('Error fetching user:', error);
		return { status: 500, error: 'Failed to fetch user data' };
	}

	if (user) {
		user.password = undefined; // Remove sensitive information
	}

	const { data: userTracklist, error: tracklistError } = await supabase
		.from('tracklists')
		.select('*')
		.eq('userId', id)
		.maybeSingle();

	if (tracklistError) {
		console.error('Error fetching user tracklists:', tracklistError);
		return { user, status: 500, error: 'Failed to fetch user tracklists' };
	}

	let tracklist = userTracklist;
	tracklist.coins.sort((a, b) => {
		return b.startPrice - a.startPrice; // Sort by start price
	});

	for (const coin of userTracklist?.coins) {
		let response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.coinId}`);
		let coinData = await response.json();

		console.log('coinData: ', coinData);
		console.log('coin: ', coin);
		coin.currentPrice = coinData.market_data?.current_price.usd;
	}

	return {
		// removeCoinFromTracklist,
		user,
		tracklist
	};
};
