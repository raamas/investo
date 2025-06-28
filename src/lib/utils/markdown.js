import { marked } from 'marked';
import hljs from 'highlight.js';

// Configure marked with options
marked.setOptions({
	breaks: true,
	gfm: true, // GitHub Flavored Markdown
	headerIds: true,
	highlight: function (code, lang) {
		// Optional: Add syntax highlighting with highlight.js
		// npm install highlight.js
		if (lang && hljs.getLanguage(lang)) {
			return hljs.highlight(code, { language: lang }).value;
		}
		return code;
	},
	sanitize: true // Sanitize HTML to prevent XSS
});

export function renderMarkdown(content) {
	return marked(content);
}
