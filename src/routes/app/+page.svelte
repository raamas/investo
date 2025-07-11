<script>
	import Coin from '$lib/components/Coin.svelte';
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

<main
	class="flex w-screen flex-col items-center text-center md:flex-row md:flex-wrap md:justify-center md:gap-3"
>
	<PageTitle className="md:mt-24 ">Popular</PageTitle>
	<div class="flex w-[80vw] flex-col flex-wrap items-end justify-center md:flex-row md:gap-3">
		{#each data.coins as coin}<Coin {coin} />{/each}
	</div>
</main>
