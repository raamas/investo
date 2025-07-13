<script>
	//@ts-nocheck
	import Card from './ui/card/card.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import Icon from '@iconify/svelte';
	import UserCoin from './userCoin.svelte';

	let { coins, coinUser, sessionUser, removeCoin } = $props();
</script>

<h3 class="mb-6 text-xl">Tracklist</h3>
<Card class=" mb-8 w-full shadow-2xs">
	<CardContent>
		<div class="flex flex-col gap-4">
			{#if !coins}
				<p class="text-gray-600">no coins tracked</p>
			{/if}

			{#each coins as coin}
				<UserCoin {coin} {coinUser} {sessionUser} {removeCoin} />
			{/each}
		</div>
	</CardContent>
</Card>
