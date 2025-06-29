<script>
	let { children, className } = $props();
</script>

<h2 class="m-8 text-3xl font-bold {className}">{@render children()}</h2>
