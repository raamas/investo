<script>
	import NavBar from '$lib/components/NavBar.svelte';

	let { children, data } = $props();
</script>

{@render children()}
<NavBar user={data?.session?.user} />
