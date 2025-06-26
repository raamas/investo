<script>
	import Button from '$lib/components/ui/button/button.svelte';

	// import '../app.css';
	import Icon from '@iconify/svelte';
	let { children } = $props();
</script>

<header class="flex w-screen flex-row justify-between bg-emerald-300 p-6 text-center">
	<h2 class="text-md font-bold">INVESTO</h2>
	<div class="settings">
		<button>
			<Icon icon="solar:settings-bold" />
		</button>
	</div>
</header>
{@render children()}
<div class="sticky bottom-0 flex min-h-10 w-screen flex-row justify-evenly bg-gray-200 p-4">
	<nav>
		<ul class="flex flex-row gap-20">
			<li><a href="/app"><Icon icon="solar:home-2-bold" style="font-size: 24px;" /></a></li>
			<li><a href="#"> <Icon icon="solar:user-bold" style="font-size: 24px;" /> </a></li>
			<li><a href="#"> <Icon icon="solar:graph-bold" style="font-size: 24px;" /> </a></li>
		</ul>
	</nav>
</div>
