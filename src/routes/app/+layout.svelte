<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Icon from '@iconify/svelte';
	// let d = $props();
	// console.log(d);
	let { children, data } = $props();
</script>

<NavBar user={data?.session?.user}
	><ul class="flex flex-row items-center gap-10">
		<li>
			<a href="/app" class="flex transition-all ease-in hover:text-emerald-700">
				<p class="text-grey-600 mr-2 flex hidden md:flex">Home</p>
				<Icon class="md:hidden" icon="lucide:home" style="font-size: 24px;" /></a
			>
		</li>
		<li>
			<a href="/app/feed" class="flex transition-all ease-in hover:text-emerald-700">
				<p class="text-grey-600 mr-2 flex hidden md:flex">Feed</p>
				<Icon class="md:hidden" icon="lucide:newspaper" style="font-size: 24px;" />
			</a>
		</li>
		<li>
			{#if data?.session?.user?.id}
				<a
					href="/app/user/{data?.session?.user?.id}"
					class="flex transition-all ease-in hover:text-emerald-700"
					aria-label="View profile"
				>
					<img src={data.session.user.image} class="size-12 rounded-full" alt="" />
				</a>
			{:else}
				<a href="/auth" class="flex transition-all ease-in hover:text-emerald-700">
					<!-- <p class="text-grey-600 mr-2 flex hidden md:flex">Log In</p> -->
					<Icon class="md:hidden" icon="lucide:person-24-regular" style="font-size: 24px;" />
				</a>
			{/if}
		</li>
	</ul></NavBar
>

{@render children()}
