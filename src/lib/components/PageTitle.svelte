<script>
	let { children, className } = $props();
</script>

<h2 class="m-8 mb-4 w-full text-4xl font-bold {className}">{@render children()}</h2>
