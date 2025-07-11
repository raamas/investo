<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	let { data } = $props();
</script>

<div
	class="flex flex-col items-center justify-center p-4 text-center md:flex-row md:flex-wrap md:gap-4"
>
	<PageTitle className="md:mt-24">Feed</PageTitle>
	{#each data.posts as post}
		<Card class="mb-4 max-h-[60vh] w-full max-w-md text-start shadow-2xs md:min-h-[60vh] md:w-lg">
			<CardHeader>
				<img src={post.image} alt={post.title} class="mb-2 h-48 w-full rounded-lg object-cover" />
				<CardTitle>
					<a href="/app/feed/{post.slug}/"> {post.title}</a>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-gray-600">{post.excerpt}</p>
				<p class="mt-2 text-sm text-gray-600 italic">{post.authorName}</p>
				<p class="mt-1 text-xs text-gray-500">{post.date}</p>
			</CardContent>
		</Card>
	{/each}
	<!-- POPULAR POSTS -->
</div>
