import { redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '$lib/supabaseClient.js';

export const load = async (event) => {
	const session = await event.locals.auth();
	if (session?.user) {
		// Check if the user already exists in the database
		const { data: existingUser, error: existingUserError } = await supabase
			.from('users')
			.select('*')
			.eq('email', session.user.email)
			.single();

		if (existingUserError) {
			console.error('Error checking existing user:', existingUserError);
			return { session };
			// return { status: 500, error: 'Failed to check existing user' };
		}

		if (existingUser) {
			// User already exists, redirect to their profile
			// redirect(303, `/user/${existingUser.id}`);
			session.user.id = existingUser.id; // Ensure the session has the user ID
			return {
				session
			};
		}

		// User does not exist, create a new user record
		const { data, error } = await supabase
			.from('users')
			.insert({
				id: uuidv4(),
				email: session.user.email,
				name: session.user.name || session.user.email.split('@')[0],
				created_at: new Date().toISOString()
			})
			.select()
			.single();

		if (error) {
			console.error('Error creating user:', error);
			return { status: 500, error: 'Failed to create user' };
		}

		if (data) {
			return event.redirect(303, `/user/${data.id}`);
		} else {
			return event.redirect(303, '/');
		}
	}

	return {
		session
	};
};
