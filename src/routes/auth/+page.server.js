import { supabase } from '$lib/supabaseClient.js';
import { redirect } from '@sveltejs/kit';
import { v4 } from 'uuid';

export const load = async (event) => {
	const session = await event.locals.auth();

	if (session?.user) {
		// Check if the user already exists in the database
		const { data: existingUser, error: existingUserError } = await supabase
			.from('users')
			.select()
			.eq('email', session.user.email)
			.maybeSingle();

		if (existingUserError) {
			console.error('Error checking existing user:', existingUserError);
			return { status: 500, error: 'Failed to check existing user' };
		}

		if (existingUser) {
			// User already exists, redirect to their profile
			return redirect(303, `/app/user/${existingUser.id}`);
		}

		// User does not exist, create a new user record
		// Note: Ensure that the 'users' table has the necessary columns: id, email, name, created_at

		let { data, error } = supabase
			.from('users')
			.insert({
				id: v4(),
				email: session.user.email,
				name: session.user.name || session.user.email.split('@')[0],
				created_at: new Date().toISOString()
			})
			.select()
			.single();

		if (error) {
			console.error('Error fetching user:', error);
			return { status: 500, error: 'Failed to fetch user data here mf' };
		}

		if (data) {
			return redirect(303, `/app/user/${data.id}`);
		} else {
			return redirect(303, '/');
		}
	}

	return {
		session
	};
};
