import { supabase } from '$lib/supabaseClient';

export const load = async () => {
	const { data: posts, error } = await supabase.from('posts').select();
	if (error) {
		console.log('error loading posts: ', error);
		return;
	}

	posts.sort((a, b) => {
		return b.likes - a.likes;
	});

	return {
		posts
	};
};
