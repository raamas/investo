<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CardAction from '$lib/components/ui/card/card-action.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';

	let { data } = $props();
</script>

<!-- <h2 class="m-8 text-3xl font-bold">Popular</h2> -->
<PageTitle>Popular</PageTitle>
<main class="flex w-screen flex-col items-center p-2 px-4">
	{#each data.coins as coin}
		<Card class="my-2 w-full shadow-2xs">
			<CardHeader>
				<CardTitle class="text-xl font-bold">
					<a href="/app/{coin.item.id}">
						{coin.item.name}
					</a>
				</CardTitle>
				<CardDescription>{coin.item.symbol}</CardDescription>
				<!-- this has to be a link or button-->
			</CardHeader>
			<CardContent class="flex flex-row items-center justify-between gap-2">
				<div class="flex w-1/2 justify-center rounded-sm bg-green-200 p-2">
					${coin.item.data.price.toLocaleString()}
				</div>
				{#if coin.item.data.price_change_percentage_24h.usd < 0}
					<div class="flex w-1/2 justify-center rounded-sm bg-red-200 p-2">
						{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
					</div>
				{:else}
					<div class="flex w-1/2 justify-center rounded-sm bg-green-200 p-2">
						{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
					</div>
				{/if}
			</CardContent>
		</Card>
	{/each}
	<!-- 
    BALANCE
    FOR COIN IN COINS:
        COIN CARD
    NAVBAR
    -->
</main>
