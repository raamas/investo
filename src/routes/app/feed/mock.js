// Mock posts data for SvelteKit project
export const mockPosts = [
	{
		id: 1,
		title: 'Getting Started with SvelteKit: A Comprehensive Guide',
		slug: 'getting-started-sveltekit-guide',
		excerpt:
			'Learn the fundamentals of SvelteKit and build your first full-stack application with this step-by-step tutorial.',
		content: `SvelteKit is a powerful framework that builds on top of Svelte to provide a complete solution for building web applications. In this guide, we'll explore the core concepts and build a real application together.

## What is SvelteKit?

SvelteKit is the official application framework for Svelte. It provides:
- File-based routing
- Server-side rendering (SSR)
- API routes
- Static site generation
- And much more...

## Setting Up Your First Project

To get started, run the following command:

\`\`\`bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

This will create a new SvelteKit project with all the necessary dependencies and a development server.`,
		author: {
			id: 1,
			name: 'Sarah Johnson',
			avatar:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
			bio: 'Full-stack developer and tech educator'
		},
		category: 'Tutorial',
		tags: ['sveltekit', 'javascript', 'web-development', 'tutorial'],
		publishedAt: '2024-06-15T10:30:00Z',
		updatedAt: '2024-06-15T10:30:00Z',
		readingTime: 8,
		featured: true,
		status: 'published',
		views: 1247,
		likes: 89,
		comments: 23,
		coverImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop'
	},
	{
		id: 2,
		title: 'Building Reactive Components with Svelte Stores',
		slug: 'reactive-components-svelte-stores',
		excerpt:
			'Master state management in Svelte applications using stores, derived values, and reactive statements.',
		content: `State management is crucial in modern web applications. Svelte provides an elegant solution through its store system that makes reactive programming intuitive and powerful.

## Understanding Svelte Stores

Svelte stores are reactive data containers that can be shared between components. There are three types:

1. **Writable stores** - Can be updated from outside
2. **Readable stores** - Read-only, updated internally
3. **Derived stores** - Computed from other stores

## Creating Your First Store

\`\`\`javascript
import { writable } from 'svelte/store';

export const count = writable(0);
\`\`\`

This simple store can now be used across your entire application to share state between components.`,
		author: {
			id: 2,
			name: 'Alex Chen',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
			bio: 'Frontend architect specializing in reactive frameworks'
		},
		category: 'Development',
		tags: ['svelte', 'state-management', 'reactivity', 'stores'],
		publishedAt: '2024-06-12T14:15:00Z',
		updatedAt: '2024-06-13T09:20:00Z',
		readingTime: 6,
		featured: false,
		status: 'published',
		views: 892,
		likes: 67,
		comments: 15,
		coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
	},
	{
		id: 3,
		title: 'Modern CSS Techniques for Better Web Design',
		slug: 'modern-css-techniques-web-design',
		excerpt:
			'Explore cutting-edge CSS features like Grid, Flexbox, and CSS Custom Properties to create stunning layouts.',
		content: `CSS has evolved tremendously over the past few years. Modern CSS gives us powerful tools to create responsive, maintainable, and beautiful web designs without relying on external frameworks.

## CSS Grid: The Layout Revolution

CSS Grid has revolutionized how we approach layout design. Unlike Flexbox, which is one-dimensional, Grid gives us full two-dimensional control.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Custom Properties: CSS Variables Done Right

Custom properties bring dynamic styling capabilities directly to CSS:

\`\`\`css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.button {
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}
\`\`\``,
		author: {
			id: 3,
			name: 'Maria Rodriguez',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
			bio: 'UI/UX designer and CSS specialist'
		},
		category: 'Design',
		tags: ['css', 'web-design', 'grid', 'flexbox', 'responsive'],
		publishedAt: '2024-06-10T16:45:00Z',
		updatedAt: '2024-06-10T16:45:00Z',
		readingTime: 10,
		featured: true,
		status: 'published',
		views: 2156,
		likes: 145,
		comments: 32,
		coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
	},
	{
		id: 4,
		title: 'TypeScript Best Practices for Large Applications',
		slug: 'typescript-best-practices-large-applications',
		excerpt:
			'Learn how to structure and organize TypeScript code for maintainable, scalable enterprise applications.',
		content: `As applications grow in complexity, TypeScript becomes invaluable for maintaining code quality and developer productivity. Here are proven strategies for large-scale TypeScript development.

## Project Structure and Organization

A well-organized project structure is the foundation of maintainable code:

\`\`\`
src/
├── components/
├── types/
├── utils/
├── stores/
├── routes/
└── lib/
\`\`\`

## Leveraging Advanced TypeScript Features

### Utility Types

TypeScript provides powerful utility types that can save you time:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

type CreateUserRequest = Omit<User, 'id'>;
type UserPublicInfo = Pick<User, 'name' | 'role'>;
\`\`\``,
		author: {
			id: 4,
			name: 'David Kim',
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
			bio: 'Senior software engineer and TypeScript advocate'
		},
		category: 'Development',
		tags: ['typescript', 'best-practices', 'enterprise', 'architecture'],
		publishedAt: '2024-06-08T11:20:00Z',
		updatedAt: '2024-06-09T08:15:00Z',
		readingTime: 12,
		featured: false,
		status: 'published',
		views: 1834,
		likes: 98,
		comments: 41,
		coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
	},
	{
		id: 5,
		title: 'The Future of Web Development: Trends to Watch',
		slug: 'future-web-development-trends',
		excerpt:
			'Discover emerging technologies and trends that will shape the future of web development in the coming years.',
		content: `The web development landscape is constantly evolving. As we look toward the future, several exciting trends are emerging that will fundamentally change how we build and interact with web applications.

## WebAssembly: Near-Native Performance

WebAssembly (WASM) is enabling new possibilities for web applications by bringing near-native performance to the browser. Languages like Rust, C++, and Go can now run efficiently in web browsers.

## Edge Computing and CDN Evolution

The move toward edge computing is bringing computation closer to users, reducing latency and improving user experience. Modern CDNs are becoming computing platforms in their own right.

## AI-Powered Development Tools

Artificial intelligence is revolutionizing how we write code, with tools that can generate, review, and optimize code automatically.`,
		author: {
			id: 5,
			name: 'Emma Thompson',
			avatar:
				'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
			bio: 'Tech journalist and industry analyst'
		},
		category: 'Industry',
		tags: ['future', 'trends', 'webassembly', 'ai', 'edge-computing'],
		publishedAt: '2024-06-05T13:30:00Z',
		updatedAt: '2024-06-05T13:30:00Z',
		readingTime: 7,
		featured: true,
		status: 'published',
		views: 3421,
		likes: 234,
		comments: 67,
		coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop'
	},
	{
		id: 6,
		title: 'Optimizing Performance in Single Page Applications',
		slug: 'optimizing-performance-spa',
		excerpt:
			'Practical techniques for improving load times, runtime performance, and user experience in SPAs.',
		content: `Performance optimization is crucial for user experience and SEO. This guide covers essential techniques for making your single-page applications lightning fast.

## Code Splitting and Lazy Loading

Break your application into smaller chunks that load on demand:

\`\`\`javascript
// Dynamic imports for route-based code splitting
const About = () => import('./routes/About.svelte');
\`\`\`

## Image Optimization Strategies

Images often account for the majority of page weight. Implement these strategies:

- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Responsive images with srcset
- Proper compression techniques

## Bundle Analysis and Optimization

Regular bundle analysis helps identify optimization opportunities and prevents bundle bloat over time.`,
		author: {
			id: 1,
			name: 'Sarah Johnson',
			avatar:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
			bio: 'Full-stack developer and tech educator'
		},
		category: 'Performance',
		tags: ['performance', 'optimization', 'spa', 'code-splitting', 'lazy-loading'],
		publishedAt: '2024-06-03T09:45:00Z',
		updatedAt: '2024-06-04T12:30:00Z',
		readingTime: 9,
		featured: false,
		status: 'published',
		views: 1567,
		likes: 112,
		comments: 28,
		coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
	},
	{
		id: 7,
		title: 'Building Accessible Web Applications',
		slug: 'building-accessible-web-applications',
		excerpt:
			'A comprehensive guide to web accessibility, covering ARIA, semantic HTML, and inclusive design principles.',
		content: `Web accessibility ensures that your applications are usable by everyone, including people with disabilities. This isn't just good practice—it's often legally required and always the right thing to do.

## Semantic HTML: The Foundation

Start with proper semantic HTML elements:

\`\`\`html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
\`\`\`

## ARIA Attributes for Enhanced Accessibility

ARIA (Accessible Rich Internet Applications) attributes provide additional context for screen readers:

- \`aria-label\`: Provides accessible names
- \`aria-describedby\`: Links to descriptive text
- \`role\`: Defines the element's purpose

## Color and Contrast Considerations

Ensure sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text) and never rely solely on color to convey information.`,
		author: {
			id: 6,
			name: 'Jordan Walker',
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
			bio: 'Accessibility consultant and inclusive design advocate'
		},
		category: 'Accessibility',
		tags: ['accessibility', 'a11y', 'aria', 'inclusive-design', 'semantic-html'],
		publishedAt: '2024-06-01T15:20:00Z',
		updatedAt: '2024-06-01T15:20:00Z',
		readingTime: 11,
		featured: false,
		status: 'published',
		views: 987,
		likes: 76,
		comments: 19,
		coverImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop'
	},
	{
		id: 8,
		title: 'Draft: Advanced Animation Techniques with CSS and JavaScript',
		slug: 'advanced-animation-techniques',
		excerpt:
			'Exploring complex animations using CSS transforms, transitions, and the Web Animations API.',
		content: `This is a draft post about advanced animation techniques. Content is still being developed...

## CSS Transforms and Transitions

Basic foundation for smooth animations...

## Web Animations API

JavaScript-based animations for complex interactions...

## Performance Considerations

Optimizing animations for 60fps performance...`,
		author: {
			id: 3,
			name: 'Maria Rodriguez',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
			bio: 'UI/UX designer and CSS specialist'
		},
		category: 'Design',
		tags: ['animation', 'css', 'javascript', 'performance', 'ux'],
		publishedAt: null,
		updatedAt: '2024-06-28T10:15:00Z',
		readingTime: 5,
		featured: false,
		status: 'draft',
		views: 0,
		likes: 0,
		comments: 0,
		coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
	}
];

// Helper functions for working with the mock data
export const getPostById = (id) => {
	return mockPosts.find((post) => post.id === id);
};

export const getPostBySlug = (slug) => {
	return mockPosts.find((post) => post.slug === slug);
};

export const getPublishedPosts = () => {
	return mockPosts.filter((post) => post.status === 'published');
};

export const getFeaturedPosts = () => {
	return mockPosts.filter((post) => post.featured && post.status === 'published');
};

export const getPostsByCategory = (category) => {
	return mockPosts.filter(
		(post) => post.category.toLowerCase() === category.toLowerCase() && post.status === 'published'
	);
};

export const getPostsByTag = (tag) => {
	return mockPosts.filter(
		(post) => post.tags.includes(tag.toLowerCase()) && post.status === 'published'
	);
};

export const getPostsByAuthor = (authorId) => {
	return mockPosts.filter((post) => post.author.id === authorId && post.status === 'published');
};

export const searchPosts = (query) => {
	const lowercaseQuery = query.toLowerCase();
	return mockPosts.filter(
		(post) =>
			post.status === 'published' &&
			(post.title.toLowerCase().includes(lowercaseQuery) ||
				post.excerpt.toLowerCase().includes(lowercaseQuery) ||
				post.content.toLowerCase().includes(lowercaseQuery) ||
				post.tags.some((tag) => tag.includes(lowercaseQuery)))
	);
};
