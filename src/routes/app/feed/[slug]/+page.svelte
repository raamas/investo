<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { renderMarkdown } from '$lib/utils/markdown.js';

	let { data } = $props();

	console.log(data);
</script>

<PageTitle>{data.title}</PageTitle>
<div class="flex flex-col items-center justify-center p-8">
	<div class="mb-4 w-full max-w-2xl">
		<img src={data.coverImage} alt={data.title} class="mb-2 h-64 w-full rounded-lg object-cover" />
	</div>
	<p class="text-sm text-gray-600">{data.excerpt}</p>
	<p class="mt-2 text-sm text-gray-600 italic">By {data.author.name}</p>
</div>
<div class="flex flex-col items-center justify-center p-8">
	<div class="w-full max-w-2xl">
		<div class="prose">
			<!-- data.content is MarkDown Text. render it properly -->
			{@html renderMarkdown(data.content)}
		</div>
	</div>
</div>

<style>
	@reference "../../../../app.css";

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
</style>
