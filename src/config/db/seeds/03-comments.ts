import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('comments').del();

	// Inserts seed entries
	await knex('comments').insert([
		{
			comment_id: 1,
			content:
				'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
			product_request_id: 1,
			user_id: 1,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 2,
			content:
				'Please use fun, color-coded labels to easily identify them at a glance',
			product_request_id: 1,
			user_id: 2,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 3,
			content:
				'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
			product_request_id: 2,
			user_id: 8,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 4,
			content:
				'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
			product_request_id: 2,
			user_id: 9,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 5,
			content:
				'While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme" followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
			product_request_id: 2,
			user_id: 10,
			replying_to_user: 'hummingbird1',
			replying_to_id: 4,
			reply_id: 1,
		},
		{
			comment_id: 6,
			content: `Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.`,
			product_request_id: 2,
			user_id: 6,
			replying_to_user: 'annev1990',
			replying_to_id: 5,
			reply_id: 2,
		},
		{
			comment_id: 7,
			content: `Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.`,
			product_request_id: 3,
			user_id: 5,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 8,
			content: `Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean`,
			product_request_id: 4,
			user_id: 11,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 9,
			content: `Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..`,
			product_request_id: 4,
			user_id: 12,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 10,
			content: `I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?`,
			product_request_id: 5,
			user_id: 3,
			replying_to_user: '',
			replying_to_id: null,
			reply_id: null,
		},
		{
			comment_id: 11,
			content: `Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.`,
			product_request_id: 5,
			user_id: 3,
			replying_to_user: 'arlen_the_marlin',
			replying_to_id: 10,
			reply_id: 3,
		},
	]);
}
