import { redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '$lib/supabaseClient.js';

export const load = async (event) => {
	const session = await event.locals.auth();
	const url = event.url;

	if (session && session.user) {
		// Check if the user already exists in the database
		const { data: existingUser, error: existingUserError } = await supabase
			.from('users')
			.select('*')
			.eq('email', session.user.email)
			.maybeSingle();

		if (existingUserError) {
			console.error('Error checking existing user:', existingUserError);
			return { session };
			// return { status: 500, error: 'Failed to check existing user' };
		}
		if (existingUser) {
			// User already exists, redirect to their profile
			// redirect(303, `/app/user/${existingUser.id}`);
			session.user.id = existingUser.id; // Ensure the session has the user ID
			return {
				session
			};
		}
		if (!existingUser && url.pathname !== '/auth') {
			console.log(existingUserError);
			console.log(url.pathname, 'to /auth');
			return redirect(303, `/auth`);
		}
	}

	return {
		session
	};
};
