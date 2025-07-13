<script>
	//@ts-nocheck

	let { coin, sessionUser, coinUser, removeCoin } = $props();
	import Button from './ui/button/button.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col items-start justify-between text-start">
	<p class="mb-2 text-lg font-semibold">{coin?.name}</p>
	{#if sessionUser === coinUser}
		{#if coin?.startPrice < coin?.currentPrice}
			<div class="">
				<p class="nowrap pr-2 text-sm font-light font-medium">
					Starting price: ${coin?.startPrice?.toLocaleString()} ({new Date(
						coin?.dateStartTracking
					).toLocaleDateString()})
				</p>

				<p class=" nowrap flex items-center text-sm font-light font-medium text-emerald-700">
					Current price: ${coin?.currentPrice?.toLocaleString() ||
						coin?.startPrice?.toLocaleString()}

					<Icon icon="lucide:trending-up" class="text-emerald-700" />
				</p>
			</div>
		{:else if coin?.startPrice == coin?.currentPrice}
			<p class="text-sm font-light font-medium text-gray-800">
				Starting price: ${coin?.startPrice?.toLocaleString()} ({new Date(
					coin?.dateStartTracking
				).toLocaleDateString()})
			</p>
			<br />
			<p class="text-sm font-light font-medium text-gray-800">
				Current price: ${coin?.currentPrice?.toLocaleString() || coin?.startPrice?.toLocaleString()}
			</p>
		{:else}
			<div class="">
				<p class="w-full text-sm font-light font-medium">
					Starting price: ${coin?.startPrice?.toLocaleString()} ({new Date(
						coin?.dateStartTracking
					).toLocaleDateString()})
				</p>

				<p class="flex items-center text-sm font-light font-medium text-red-700">
					Current price: ${coin?.currentPrice?.toLocaleString()}
					<Icon icon="lucide:trending-down" />
				</p>
			</div>
		{/if}

		{#if sessionUser}
			<Button
				class="mt-2 w-full rounded-lg border border-red-700 bg-white px-4 py-2 text-sm text-red-700 hover:border-red-900 hover:bg-white  hover:text-red-950"
				onclick={() => {
					console.log(`Remove ${coin?.coinId} from tracklist`);
					removeCoin(coin.coinId, sessionUser);
				}}
			>
				<Icon icon="lucide:trash" />
			</Button>
		{/if}
	{/if}
</div>
