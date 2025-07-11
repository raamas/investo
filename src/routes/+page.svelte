<script>
	// @ts-nocheck

	import NavBar from '$lib/components/NavBar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	let isLoggedIn;
	let isLoading;

	let { data } = $props();
</script>

<main class="min-h-screen snap-y snap-mandatory scroll-smooth bg-white text-black">
	<!-- Navigation -->
	<NavBar>
		<div class="buttons">
			<Button
				class="border-2 border-emerald-700 bg-white text-emerald-700 transition-transform ease-in-out hover:scale-102 hover:border-emerald-900 hover:bg-white hover:text-emerald-900"
				>Pricing</Button
			>
			{#if !data.session?.user?.id}
				<Button
					class="bg-emerald-700  transition-transform ease-in-out hover:scale-102 hover:bg-emerald-900"
				>
					<a href="/auth"> Log In </a>
				</Button>
			{:else}
				<Button
					class="bg-emerald-700  transition-transform ease-in-out hover:scale-102 hover:bg-emerald-900"
				>
					<a href="/app/user/{data.session.user?.id}">Dashboard</a>
				</Button>
			{/if}
		</div>
	</NavBar>
	<!-- <header
		class="p flex w-full flex-row items-center justify-between border-b border-neutral-900/20 p-6 shadow-sm/5"
	>
		<h2 class="hover: w-fit text-3xl font-bold text-emerald-700">Investo</h2>
		<div class="buttons">
			<Button
				class="border-2 border-emerald-700 bg-white text-emerald-700 transition-transform ease-in-out hover:scale-102 hover:border-emerald-900 hover:bg-white hover:text-emerald-900"
				>Pricing</Button
			>
			{#if !data.session?.user?.id}
				<Button
					class="bg-emerald-700  transition-transform ease-in-out hover:scale-102 hover:bg-emerald-900"
				>
					<a href="/auth"> Log In </a>
				</Button>
			{:else}
				<Button
					class="bg-emerald-700  transition-transform ease-in-out hover:scale-102 hover:bg-emerald-900"
				>
					<a href="/app/user/{data.session.user?.id}">Dashboard</a>
				</Button>
			{/if}
		</div>
	</header> -->

	<!-- Hero Section -->
	<section class="container mx-auto snap-center snap-always px-6 py-20 text-center">
		<div class="mx-auto max-w-4xl pt-12 lg:pt-36">
			<h1 class="ssm:text-4xl text-base-900 mb-6 text-6xl font-bold">Transform Your Workflow</h1>
			<p class="text-base-900 mb-8 text-xl leading-relaxed">
				Streamline your processes, boost productivity, and achieve more with our powerful platform
				designed for modern teams.
			</p>

			{#if isLoading}
				<button
					disabled
					class="cursor-not-allowed rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold opacity-50"
				>
					Loading...
				</button>
			{:else}
				<button
					class="transform rounded-lg bg-emerald-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-900 hover:shadow-xl"
				>
					{#if isLoggedIn}
						<a href="/app">Go to Dashboard</a>
					{:else}
						<a href="/auth">Get Started!</a>
					{/if}
				</button>
			{/if}
		</div>
	</section>

	<!-- Features Section -->
	<section class="container mx-auto snap-y snap-mandatory px-6 py-20">
		<div class="grid gap-8 md:grid-cols-3">
			<div
				class="rounded-xl border border-neutral-900/30 p-8 shadow-sm/8 transition-all duration-300 hover:scale-102"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-700">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="text-base-900 mb-3 text-xl font-bold">Lightning Fast</h3>
				<p class="text-base-900">
					Experience blazing-fast performance with our optimized infrastructure and cutting-edge
					technology.
				</p>
			</div>

			<div
				class="rounded-xl border border-neutral-900/30 p-8 shadow-sm/8 transition-all duration-300 hover:scale-102"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-700">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Secure & Reliable</h3>
				<p>Your data is protected with enterprise-grade security and 99.9% uptime guarantee.</p>
			</div>

			<div
				class="rounded-xl border border-neutral-900/30 p-8 shadow-sm/8 transition-all duration-300 hover:scale-102"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-700">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">User Friendly</h3>
				<p>Intuitive design and seamless user experience that gets you productive from day one.</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="container flex w-full px-6 py-20 text-center">
		<div class="mx-auto max-w-2xl rounded-2xl bg-white/10 p-12 backdrop-blur-sm">
			<h2 class="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
			<p class="mb-8">Join thousands of users who are already transforming their workflow.</p>

			{#if isLoading}
				<button
					disabled
					class="cursor-not-allowed rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold opacity-50"
				>
					Loading...
				</button>
			{:else}
				<button
					class="transform rounded-lg bg-emerald-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-102 hover:text-white"
				>
					<!-- {isLoggedIn ? 'Go to Dashboard' : 'Start Free Trial'} -->
					{#if isLoggedIn}
						<a href="/app">Go to Dashboard</a>
					{:else}
						<a href="/auth">Start Now!</a>
					{/if}
				</button>
			{/if}
		</div>
	</section>
</main>
