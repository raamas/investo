<script>
	import Button from '$lib/components/ui/button/button.svelte';
	let isLoggedIn;
	let isLoading;

	let { data } = $props();
	console.log('data landing: ', data);
</script>

<main class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
	<!-- Navigation -->
	<nav
		class="container mx-auto flex flex-row items-center justify-between bg-neutral-300/50 px-6 py-8 backdrop-blur-xl"
	>
		<h2 class="w-fit text-lg font-bold">Investo</h2>
		<div class="buttons">
			<Button>Pricing</Button>
			{#if data.session.user}
				<Button class="bg-neutral-200 text-gray-800">
					<a href="/app/user/{data.session.user?.id}">Dashboard</a>
				</Button>
			{:else}
				<Button class="bg-neutral-200 text-gray-800">
					<a href="/auth"> Log In </a>
				</Button>
			{/if}
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="container mx-auto px-6 py-20 text-center">
		<div class="mx-auto max-w-4xl">
			<h1
				class="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-6xl font-bold text-transparent"
			>
				Transform Your Workflow
			</h1>
			<p class="mb-8 text-xl leading-relaxed text-gray-300">
				Streamline your processes, boost productivity, and achieve more with our powerful platform
				designed for modern teams.
			</p>

			{#if isLoading}
				<button
					disabled
					class="cursor-not-allowed rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold opacity-50"
				>
					Loading...
				</button>
			{:else}
				<button
					class="transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
				>
					{isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
				</button>
			{/if}
		</div>
	</section>

	<!-- Features Section -->
	<section class="container mx-auto px-6 py-20">
		<div class="grid gap-8 md:grid-cols-3">
			<div
				class="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Lightning Fast</h3>
				<p class="text-gray-300">
					Experience blazing-fast performance with our optimized infrastructure and cutting-edge
					technology.
				</p>
			</div>

			<div
				class="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
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
				<p class="text-gray-300">
					Your data is protected with enterprise-grade security and 99.9% uptime guarantee.
				</p>
			</div>

			<div
				class="rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
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
				<p class="text-gray-300">
					Intuitive design and seamless user experience that gets you productive from day one.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="container mx-auto px-6 py-20 text-center">
		<div class="mx-auto max-w-2xl rounded-2xl bg-white/10 p-12 backdrop-blur-sm">
			<h2 class="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
			<p class="mb-8 text-gray-300">
				Join thousands of users who are already transforming their workflow.
			</p>

			{#if isLoading}
				<button
					disabled
					class="cursor-not-allowed rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold opacity-50"
				>
					Loading...
				</button>
			{:else}
				<button
					class="transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
				>
					{isLoggedIn ? 'Go to Dashboard' : 'Start Free Trial'}
				</button>
			{/if}
		</div>
	</section>
</main>
