import { getPostBySlug } from '../mock';
export const load = ({ params }) => {
	let response = getPostBySlug(params.slug);
	console.log(response);
	return response;
};
