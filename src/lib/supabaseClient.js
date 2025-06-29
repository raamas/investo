import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://fardgqleppigumyypdsz.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcmRncWxlcHBpZ3VteXlwZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMzExODMsImV4cCI6MjA2NjcwNzE4M30.o4Mi8Exko-jEYLtAT0RB3zBVRXH9HvgC74gdXQYrjFk'
);
