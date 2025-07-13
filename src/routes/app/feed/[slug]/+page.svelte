<script>
	//@ts-nocheck

	import PageTitle from '$lib/components/PageTitle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '@iconify/svelte';
	// import { renderMarkdown } from '$lib/utils/markdown.js';
	// import styles
	// import '../../../app.css';
	let { data } = $props();
	let post = $state(data.post);
	let likes = $derived(post.likes);
	let liked = $state(false);
	let likedClass = $derived(liked ? 'text-red-600' : '');
	let heartState = $derived(liked ? 'filled' : 'regular');

	const sendLike = async () => {
		if (liked) {
			likes = await data.removeLikes({ postId: post.postId, likes: likes });
			liked = false;
		} else {
			likes = await data.sendLikes({ postId: post.postId, likes: likes });
			liked = true;
		}
	};
</script>

<div class="flex flex-col items-center justify-center p-8 pb-2 text-center">
	<PageTitle className="mt-24">{post.title}</PageTitle>
	<div class="mb-4 w-full max-w-2xl">
		<img src={post.image} alt={post.title} class="mb-2 h-64 w-full rounded-lg object-cover" />
	</div>
	<p class="text-sm text-gray-600">{post.excerpt}</p>
	<div class="text-md mt-4 flex w-full items-center justify-between text-gray-600 italic md:w-1/2">
		<p>
			By
			<a href="/app/user/{post.authorId}" class="hover:text-emerald-400"> {post.authorName}</a>
		</p>
		<p class="flex items-center">
			{likes} likes
			<Button
				disabled={!data.session?.user.id}
				class="text-md bg-transparent text-gray-600 shadow-none hover:bg-transparent hover:text-red-600 disabled:font-bold disabled:text-gray-800 {likedClass}"
				onclick={() => sendLike()}
			>
				<Icon icon="lucide:heart-24-{heartState}" />
			</Button>
		</p>
	</div>
</div>
<div class="flex flex-col items-center justify-center p-8">
	<div class="w-full max-w-2xl">
		<div class="xd">
			<!-- post.content is MarkDown Text. render it properly -->
			{@html post.content}
		</div>
		<p class="text-md mt-4 flex w-full items-center justify-between text-gray-600 italic">
			{post.date}
		</p>
	</div>
</div>

<!-- <style>
	@reference "../../../app.css";

	/* Custom styles for markdown content */
	:global(.markdown-content h2) {
		@apply mt-8 mb-4 text-2xl font-bold;
	}

	:global(.markdown-content h3) {
		@apply mt-6 mb-3 text-xl font-semibold;
	}

	:global(.markdown-content p) {
		@apply mb-4 leading-relaxed;
	}

	/* Code block styling with dark background */
	:global(.markdown-content pre) {
		@apply mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100 shadow-lg;
		font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
		line-height: 1.5;
	}

	/* Inline code styling */
	:global(.markdown-content code) {
		@apply rounded bg-gray-200 px-2 py-1 text-sm text-gray-800;
		font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
	}

	/* Override inline code styling when inside pre blocks */
	:global(.markdown-content pre code) {
		@apply bg-transparent p-0 text-gray-100;
	}

	:global(.markdown-content ul) {
		@apply mb-4 list-inside list-disc;
	}

	:global(.markdown-content ol) {
		@apply mb-4 list-inside list-decimal;
	}

	:global(.markdown-content blockquote) {
		@apply mb-4 border-l-4 border-blue-500 pl-4 italic;
	}
</style> -->
