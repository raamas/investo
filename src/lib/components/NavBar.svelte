<script>
	import '../../app.css';
	import Icon from '@iconify/svelte';
	let { user } = $props();
</script>

<div
	class="sticky bottom-0 flex min-h-8 w-screen flex-row justify-evenly border-1 border-gray-200 bg-white p-4 shadow-xl shadow-black"
>
	<nav>
		<ul class="flex flex-row gap-20">
			<li><a href="/app"><Icon icon="fluent:home-24-filled" style="font-size: 24px;" /></a></li>
			<li>
				<a href="/feed"> <Icon icon="fluent:news-24-filled" style="font-size: 24px;" /> </a>
			</li>
			<li>
				<a href="/user/{user.id}">
					<Icon icon="fluent:person-24-filled" style="font-size: 24px;" />
				</a>
			</li>
		</ul>
	</nav>
</div>
