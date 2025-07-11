<script>
	//@ts-nocheck
	import Button from '$lib/components/ui/button/button.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { supabase } from '$lib/supabaseClient.js';
	import Icon from '@iconify/svelte';
	import '../../../../app.css';
	import { SignOut } from '@auth/sveltekit/components';

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

<main class=":mt-md10 flex min-h-screen flex-col justify-center p-8 md:mx-auto md:w-1/2">
	<div class=" mt-6 mb-8 flex flex-row items-center justify-between gap-4">
		<h2 class="text-start text-2xl font-medium">{data?.user?.name}</h2>
		<p>10K Followers</p>
	</div>

	{#if data?.session?.user?.id !== data?.user?.id}
		<Button class="rounded-xl bg-emerald-600 p-6">Follow</Button>
	{/if}

	<h3 class="mb-6 text-xl">Tracklist</h3>
	<Card class=" mb-8 w-full shadow-2xs">
		<CardContent>
			<div class="flex flex-col gap-4">
				{#if !coins}
					<p class="text-gray-600">no coins tracked</p>
				{/if}

				<!-- Please make this fuckery one component. -->
				{#each coins as coin}
					<div class="flex flex-row items-center justify-between">
						<p class="text-lg">{coin?.name}</p>
						{#if data?.session?.user?.id === data?.user?.id}
							{#if coin?.startPrice < coin?.currentPrice}
								<div class="flex flex-row items-center">
									<p class="nowrap pr-2 text-sm font-light font-medium">
										${coin?.startPrice?.toLocaleString()}
									</p>

									<p class="nowrap text-sm font-light font-medium text-emerald-700">
										${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
									</p>
									<Icon icon="fluent:arrow-trending-24-filled" class="text-emerald-700" />
								</div>
							{:else if coin?.startPrice === coin?.currentPrice}
								<p class="text-sm font-light font-medium text-gray-800">
									${coin?.startPrice?.toLocaleString()}
								</p>
								<p class="text-sm font-light font-medium text-gray-800">
									${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
								</p>
							{:else}
								<div class="flex flex-row items-center text-red-400">
									<p class="text-sm font-light font-medium">
										${coin?.startPrice?.toLocaleString()}
									</p>
									<p class="text-sm font-light font-medium">
										${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
									</p>
									<Icon icon="fluent:arrow-trending-down-24-filled" />
								</div>
							{/if}

							{#if data.session}
								<Button
									class="rounded-lg border border-red-700 bg-white px-4 py-2 text-sm text-red-700 hover:border-red-900 hover:bg-white  hover:text-red-950"
									onclick={() => {
										// Handle remove coin from tracklist
										console.log(`Remove ${coin?.coinId} from tracklist`);
										removeCoinFromTracklist(coin?.coinId, data.session?.user?.id);
									}}
								>
									<Icon icon="fluent:delete-24-filled" />
								</Button>
							{/if}
						{/if}
					</div>
				{/each}
			</div>
		</CardContent>
	</Card>

	{#if data?.session?.user?.id === data?.user?.id}
		<SignOut
			signOutPage="signout"
			class="inline-flex items-center justify-center rounded-lg border-2 border-red-700 py-3  font-medium text-red-700 shadow-sm transition-all ease-in outline-none hover:border-red-800 hover:text-red-950"
		/>
	{/if}
</main>
