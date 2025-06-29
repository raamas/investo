<script>
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

<main class="flex min-h-[95vh] flex-col p-8">
	<div class=" mt-6 mb-8 flex flex-row items-center justify-between gap-4">
		<h2 class="text-start text-2xl font-bold">{data?.user?.name}</h2>
		<p>10K Followers</p>
	</div>
	{#if data?.session?.user?.id !== data?.user?.id}
		<Button class="rounded-xl bg-emerald-600 p-6">Follow</Button>
	{:else}
		<SignOut
			signOutPage="signout"
			class="text-primary-foreground inline-flex shrink-0 items-center justify-center gap-2 rounded-md rounded-xl bg-red-800 p-4 text-sm font-bold font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:bg-red-950/90"
		/>
	{/if}
	<h3 class="my-6 text-xl font-bold">Tracklist</h3>
	<Card class="	 w-full shadow-2xs">
		<CardContent>
			<div class="flex flex-col gap-4">
				{#if !coins}
					<p class="text-gray-600">no coins tracked</p>
				{/if}

				{#each coins as coin}
					<div class="flex flex-row items-center justify-between">
						<p class="text-lg font-semibold">{coin?.name}</p>
						{#if data?.session?.user?.id === data?.user?.id}
							{#if coin?.startPrice < coin?.currentPrice}
								<div class="flex flex-row items-center text-emerald-400">
									<p class="nowrap text-sm font-light text-emerald-400">
										${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
									</p>
									<Icon icon="fluent:arrow-trending-24-filled" />
								</div>
							{:else if coin?.startPrice === coin?.currentPrice}
								<p class="text-sm font-light text-gray-800">
									${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
								</p>
							{:else}
								<div class="flex flex-row items-center text-red-400">
									<p class="text-sm font-light">
										${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
									</p>
									<Icon icon="fluent:arrow-trending-down-24-filled" />
								</div>
							{/if}

							{#if data.session}
								<Button
									class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
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
</main>
