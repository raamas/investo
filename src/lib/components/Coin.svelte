<script>
	//@ts-nocheck
	import Card from './ui/card/card.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardContent from './ui/card/card-content.svelte';
	const { coin } = $props();
</script>

<Card class="my-2 w-full max-w-sm text-start shadow-2xs md:my-1 md:w-1/3">
	<CardHeader>
		<CardTitle class="text-xl font-bold">
			<a href="/app/coins/{coin.item.id}">
				{coin.item.name}
			</a>
		</CardTitle>
		<CardDescription>{coin.item.symbol}</CardDescription>
	</CardHeader>
	<CardContent class="flex flex-row items-center justify-between gap-2">
		<div class="flex w-1/2 justify-center rounded-sm border-2 border-neutral-900 p-2">
			${coin.item.data.price.toLocaleString()}
		</div>
		{#if coin.item.data.price_change_percentage_24h.usd < 0}
			<div class="flex w-1/2 justify-center rounded-sm border-2 border-red-700 p-2 text-red-700">
				{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
			</div>
		{:else}
			<div
				class="flex w-1/2 justify-center rounded-sm border-2 border-green-700 p-2 text-emerald-700"
			>
				{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
			</div>
		{/if}
	</CardContent>
</Card>
