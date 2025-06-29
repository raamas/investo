<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { SignIn } from '@auth/sveltekit/components';

	let { data } = $props();
	// console.log(data);
</script>

<main class="flex min-h-screen w-screen flex-col items-center justify-evenly p-2 px-4">
	<h1 class="text-2xl font-bold">Get Started!</h1>
	<div class="mt-8 flex w-full flex-col items-center justify-center gap-4">
		<Button
			class="rounded-2xl bg-emerald-600 p-6 text-lg shadow-none hover:bg-emerald-800 active:bg-emerald-900"
			><SignIn provider="google" signInPage="signin" /></Button
		>
		<Button
			variant="ghost"
			class="rounded rounded-2xl bg-emerald-600 p-6 text-lg shadow-none hover:bg-emerald-800 active:bg-emerald-900"
		>
			SignIn with Google
			<!-- <SignIn provider="google" signInPage="signin" /> -->
		</Button>
		<Button
			variant="ghost"
			class="rounded rounded-2xl bg-emerald-600 p-6 text-lg shadow-none hover:bg-emerald-800 active:bg-emerald-900"
		>
			SignIn with Google
			<!-- <SignIn provider="google" signInPage="signin" /> -->
		</Button>
	</div>
</main>
