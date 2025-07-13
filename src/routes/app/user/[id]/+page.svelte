<script>
	//@ts-nocheck
	import Button from '$lib/components/ui/button/button.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { supabase } from '$lib/supabaseClient.js';
	import Icon from '@iconify/svelte';
	import '../../../../app.css';
	import { SignOut } from '@auth/sveltekit/components';
	import UserCoinList from '$lib/components/userCoinList.svelte';

	let { data } = $props();
	let coins = $state([]);
	coins = data.tracklist?.coins;

	const removeCoinFromTracklist = async (coinId, userId) => {
		// Implement the logic to remove the coin from the tracklist
		let newUserCoins = coins.filter((coin) => coin.coinId !== coinId);

		// You might want to update the database or state here
		let { data: newTracklist, error } = await supabase
			.from('tracklists')
			.update({ coins: newUserCoins })
			.eq('userId', userId)
			.select()
			.single();

		if (error) {
			console.error('Error removing coin from tracklist:', error);
			console.log(coins);
			return;
		}

		coins = newTracklist.coins;
	};
</script>

<main class="flex min-h-screen flex-col p-8 md:mx-auto md:w-1/2">
	<div class="mt-24 mb-8 flex flex-row flex-wrap items-center justify-between">
		<h2 class="text-start text-2xl font-medium">{data?.user?.name}</h2>
		<p>10K Followers</p>
		{#if data?.session?.user?.id !== data?.user?.id}
			<Button class="mt-4 w-full rounded-xl bg-emerald-600 p-6">Follow</Button>
		{/if}
	</div>

	<UserCoinList
		{coins}
		coinUser={data?.user?.id}
		sessionUser={data?.session?.user?.id}
		removeCoin={removeCoinFromTracklist}
	/>

	{#if data?.session?.user?.id === data?.user?.id}
		<SignOut
			signOutPage="signout"
			class="inline-flex items-center justify-center rounded-lg border-2 border-red-700 py-3  font-medium text-red-700 shadow-sm transition-all ease-in outline-none hover:border-red-800 hover:text-red-950"
		/>
	{/if}
</main>
