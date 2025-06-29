<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { mockPosts } from './mock';

	let { data } = $props();
	console.log('Feed data:', data);
</script>

<PageTitle>Feed</PageTitle>
<div class="flex flex-col items-center justify-center p-4">
	{#each data.posts as post}
		<Card class="mb-4 w-full max-w-md shadow-2xs">
			<CardHeader>
				<img src={post.image} alt={post.title} class="mb-2 h-48 w-full rounded-lg object-cover" />
				<CardTitle>
					<a href="/feed/{post.slug}/"> {post.title}</a>
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
