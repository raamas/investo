<script>
	import NavBar from '$lib/components/NavBar.svelte';
	// let d = $props();
	// console.log(d);
	let { children, data } = $props();
</script>

{@render children()}
<NavBar user={data?.session?.user} />
