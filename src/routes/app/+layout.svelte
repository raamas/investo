<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Icon from '@iconify/svelte';
	// let d = $props();
	// console.log(d);
	let { children, data } = $props();
</script>

<NavBar user={data?.session?.user}
	><ul class="flex flex-row gap-10">
		<li>
			<a href="/app" class="flex transition-all ease-in hover:text-emerald-700">
				<p class="text-grey-600 mr-2 flex hidden md:flex">Home</p>
				<Icon class="md:hidden" icon="fluent:home-24-filled" style="font-size: 24px;" /></a
			>
		</li>
		<li>
			<a href="/app/feed" class="flex transition-all ease-in hover:text-emerald-700">
				<p class="text-grey-600 mr-2 flex hidden md:flex">Feed</p>
				<Icon class="md:hidden" icon="fluent:news-24-filled" style="font-size: 24px;" />
			</a>
		</li>
		<li>
			{#if data?.session?.user?.id}
				<a
					href="/app/user/{data?.session?.user?.id}"
					class="flex transition-all ease-in hover:text-emerald-700"
				>
					<p class="text-grey-600 mr-2 flex hidden md:flex">My Dashboard</p>
					<Icon class="md:hidden" icon="fluent:person-24-filled" style="font-size: 24px;" />
				</a>
			{:else}
				<a href="/auth" class="flex transition-all ease-in hover:text-emerald-700">
					<p class="text-grey-600 mr-2 flex hidden md:flex">Log In</p>
					<Icon class="md:hidden" icon="fluent:person-24-filled" style="font-size: 24px;" />
				</a>
			{/if}
		</li>
	</ul></NavBar
>

{@render children()}
hey
