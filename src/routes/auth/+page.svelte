<script>
	//@ts-nocheck
	import Button from '$lib/components/ui/button/button.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { SignIn } from '@auth/sveltekit/components';

	let { data } = $props();
</script>

<main class="flex min-h-screen w-screen flex-col items-center justify-center p-2 px-4">
	<Card class="h-[30vh] w-[60vw] max-w-sm  text-center">
		<CardContent class="flex min-h-full flex-col items-center justify-around">
			<h1 class="text-3xl font-bold text-emerald-700">Investo</h1>
			<div class="text-lg font-semibold">Sign In</div>
			<div class="mt-8 flex w-full flex-col items-center justify-center gap-4">
				<Button
					class="w-full rounded-md border border-emerald-800/80 bg-emerald-700 text-lg font-semibold shadow-sm	 hover:bg-emerald-800 active:bg-emerald-900"
					><SignIn provider="google" signInPage="signin" /></Button
				>
			</div>
		</CardContent>
	</Card>
</main>
