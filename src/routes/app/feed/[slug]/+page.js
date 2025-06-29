import { supabase } from '$lib/supabaseClient';
import { getPostBySlug } from '../mock';

const sendLikes = async (post) => {
	let { data, error } = await supabase
		.from('posts')
		.update({ likes: post.likes + 1 })
		.eq('postId', post.postId)
		.select()
		.single();

	if (error) {
		console.log('error sending likes: ', error);
		return;
	}

	return data.likes;
};

const removeLikes = async (post) => {
	let { data, error } = await supabase
		.from('posts')
		.update({ likes: post.likes - 1 })
		.eq('postId', post.postId)
		.select()
		.single();

	if (error) {
		console.log('error removing likes: ', error);
		return;
	}

	return data.likes;
};

export const load = async ({ params }) => {
	let { slug } = params;
	let { data: post, error } = await supabase.from('posts').select().eq('slug', slug).single();

	// let data = po.json()
	return {
		post,
		sendLikes,
		removeLikes
	};
};
