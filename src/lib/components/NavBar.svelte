<script>
	import '../../app.css';
	import Icon from '@iconify/svelte';
	let { user } = $props();
</script>

<div
	class="sticky bottom-0 flex min-h-8 w-screen flex-row justify-evenly border-1 border-gray-200 bg-white p-4 shadow-xl shadow-black md:fixed md:top-0 md:max-h-16 md:shadow-sm md:shadow-neutral-600/12"
>
	<nav>
		<ul class="flex flex-row gap-20 md:gap-40">
			<li>
				<a
					href="/app"
					class="flex hover:text-emerald-600 hover:underline hover:decoration-2 hover:shadow-emerald-800"
				>
					<p class="text-grey-600 mr-2 flex hidden font-bold md:flex">Home</p>
					<Icon icon="fluent:home-24-filled" style="font-size: 24px;" /></a
				>
			</li>
			<li>
				<a
					href="/app/feed"
					class="flex hover:text-emerald-600 hover:underline hover:decoration-2 hover:shadow-emerald-800"
				>
					<p class="text-grey-600 mr-2 flex hidden font-bold md:flex">Feed</p>
					<Icon icon="fluent:news-24-filled" style="font-size: 24px;" />
				</a>
			</li>
			<li>
				{#if user?.id}
					<a
						href="/app/user/{user.id}"
						class="flex hover:text-emerald-600 hover:underline hover:decoration-2 hover:shadow-emerald-800"
					>
						<p class="text-grey-600 mr-2 flex hidden font-bold md:flex">My Dashboard</p>
						<Icon icon="fluent:person-24-filled" style="font-size: 24px;" />
					</a>
				{:else}
					<a
						href="/auth"
						class="flex hover:text-emerald-600 hover:underline hover:decoration-2 hover:shadow-emerald-800"
					>
						<p class="text-grey-600 mr-2 flex hidden font-bold md:flex">Log In</p>
						<Icon icon="fluent:person-24-filled" style="font-size: 24px;" />
					</a>
				{/if}
			</li>
		</ul>
	</nav>
</div>
