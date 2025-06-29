import { supabase } from '$lib/supabaseClient.js';
import { redirect } from '@sveltejs/kit';
import { v4 } from 'uuid';

export const load = async (event) => {
	const session = await event.locals.auth();
	let { url } = event;
	// console.log('session: ', session);

	if (session && session.user) {
		// Check if the user already exists in the database
		console.log('session>user>: ', session.user);
		const { data: existingUser, error: existingUserError } = await supabase
			.from('users')
			.select()
			.eq('email', session.user.email)
			.maybeSingle();

		if (existingUserError) {
			console.error('Error checking existing user:', existingUserError);
			return { status: 500, error: 'Failed to check existing user', DBerror: existingUserError };
		}

		if (existingUser) {
			// User already exists, redirect to their profile
			console.log('existingUser: ', existingUser);
			console.log(url.pathname, 'to /app/user/id');
			return redirect(303, `/app/user/${existingUser.id}`);
		}

		// User does not exist, create a new user record
		// Note: Ensure that the 'users' table has the necessary columns: id, email, name, created_at

		let newUser = {
			id: v4(),
			email: session.user.email,
			name: session.user.name || session.user.email.split('@')[0],
			password: v4(),
			created_at: new Date().toISOString()
		};

		// console.log('newUser', newUser);
		let { data: newUserDB, error } = await supabase
			.from('users')
			.insert({ ...newUser })
			.select()
			.single();

		if (error) {
			console.error('Error creating user:', error);
			return { status: 500, error: 'Failed to create user data /auth/server.js', DBerror: error };
		}

		console.log(newUserDB);
		if (!newUserDB && url.pathname == '/auth') {
			console.log('Error creating user', error);
			console.log(url.pathname, ' to /');
			return redirect(303, '/');
		} else if (!newUserDB && url.pathname != '/auth') {
			console.log('Error creating user but ur not getting relocated', error);
		} else {
			console.log(url.pathname, ' to /app/user/id');
			return redirect(303, `/app/user/${newUserDB.id}`);
		}
	}

	return {
		session
	};
};
