<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import CardAction from '$lib/components/ui/card/card-action.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';

	let { data } = $props();

	let info = {
		balance: 300,
		change: 9.05,
		coins: [
			{
				name: 'btc',
				usd: 9,
				change: 0.009999
			},
			{
				name: 'eth',
				usd: 980,
				change: 0.9867
			}
		]
	};
</script>

<main class="flex w-screen flex-col items-center p-2 px-4">
	<Card class="mb-4 w-full">
		<CardHeader>
			<CardTitle class="text-lg">Balance:</CardTitle>
			<CardDescription>
				${info.balance.toLocaleString()} USD
			</CardDescription>
		</CardHeader>
		<CardContent>
			{#if info.change > 1}
				<div class="balance w-fit rounded-sm bg-green-200 p-2">
					%{info.change.toPrecision(2)}
				</div>
			{/if}
		</CardContent>
	</Card>

	{#each data.coins as coin}
		<Card class="my-2 w-full">
			<CardHeader>
				<CardTitle>{coin.item.symbol}</CardTitle>
				<!-- this has to be a link or button-->
				<CardDescription>
					Rank: {coin.item.market_cap_rank}
				</CardDescription>
				<CardAction>
					<img src={coin.item.small} alt="" class="rounded-full" />
				</CardAction>
			</CardHeader>
			<CardContent>
				{#if coin.item.data.price >= 1}
					<div class="w-fit rounded-sm bg-green-200 p-2">
						${coin.item.data.price.toLocaleString()} USD
					</div>
				{:else}
					<div class="w-fit p-2">
						${coin.item.data.price.toLocaleString()} USD
					</div>
				{/if}
			</CardContent>
			<CardFooter class="gap-3">
				<Button href="/app/{coin.item.id}">See Details</Button>
				<Button>Track</Button>
			</CardFooter>
		</Card>
	{/each}
	<!-- 
    BALANCE
    FOR COIN IN COINS:
        COIN CARD
    NAVBAR
    -->
</main>
