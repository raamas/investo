<script>
	// import '../app.css';
    import Icon from '@iconify/svelte'
	let { children } = $props();
</script>

<header class="bg-red-300 w-screen text-center p-6 flex flex-row justify-between">
    <h2 class="text-md font-bold">INVESTO</h2>
    <div class="settings">
        <button>
            <Icon icon='solar:settings-bold' />
        </button>
    </div>
</header>
{@render children()}