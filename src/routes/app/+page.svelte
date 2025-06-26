<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	let data = {
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
	<Card class="w-full mb-4">
		<CardHeader>
			<CardTitle class="text-lg">Balance:</CardTitle>
			<CardDescription>
				${data.balance.toLocaleString()} USD
			</CardDescription>
		</CardHeader>
		<CardContent>
			{#if data.change > 1}
				<div class="balance w-fit rounded-sm bg-green-200 p-2">
					%{data.change.toPrecision(2)}
				</div>
			{/if}
		</CardContent>
	</Card>

	{#each data.coins as coin}
		<Card class="w-[80%] my-2">
			<CardHeader>
				<CardTitle>{coin.name}</CardTitle> <!-- this has to be a link or button-->
				<CardDescription>
					${coin.usd.toLocaleString()} USD
				</CardDescription>
			</CardHeader>
			<CardContent>
				{#if coin.change > 0}
					<div class="">
						%{coin.change}
					</div>
				{/if}
			</CardContent>
            <CardFooter>
                <Button>
                    See Details
                </Button>
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
