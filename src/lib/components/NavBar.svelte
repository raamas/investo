<script>
	import '../../app.css';
	import Icon from '@iconify/svelte';
	let { user, children } = $props();
	// let {children} = $
</script>

<header
	class="fixed flex w-full flex-row items-center justify-between border-b border-neutral-900/20 bg-white p-6 shadow-sm/5"
>
	<h2 class="hover: w-fit text-3xl font-bold text-emerald-700">Investo</h2>
	{@render children()}
</header>
<!-- 
<div
	class="sticky bottom-0 flex min-h-8 w-screen flex-row justify-evenly border-1 border-neutral-400/30 bg-white p-4 md:fixed md:top-0 md:max-h-16 md:shadow-sm/5 md:shadow-neutral-400"
>
	<nav>
		<ul class="flex flex-row gap-20 md:gap-40">
			<li>
				<a href="/app" class="flex transition-all ease-in hover:text-emerald-700">
					<p class="text-grey-600 mr-2 flex hidden md:flex">Home</p>
					<Icon icon="fluent:home-24-filled" style="font-size: 24px;" /></a
				>
			</li>
			<li>
				<a href="/app/feed" class="flex transition-all ease-in hover:text-emerald-700">
					<p class="text-grey-600 mr-2 flex hidden md:flex">Feed</p>
					<Icon icon="fluent:news-24-filled" style="font-size: 24px;" />
				</a>
			</li>
			<li>
				{#if user?.id}
					<a href="/app/user/{user.id}" class="flex transition-all ease-in hover:text-emerald-700">
						<p class="text-grey-600 mr-2 flex hidden md:flex">My Dashboard</p>
						<Icon icon="fluent:person-24-filled" style="font-size: 24px;" />
					</a>
				{:else}
					<a href="/auth" class="flex transition-all ease-in hover:text-emerald-700">
						<p class="text-grey-600 mr-2 flex hidden md:flex">Log In</p>
						<Icon icon="fluent:person-24-filled" style="font-size: 24px;" />
					</a>
				{/if}
			</li>
		</ul>
	</nav>
</div> -->
