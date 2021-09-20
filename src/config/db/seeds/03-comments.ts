import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('comments').del();

	// Inserts seed entries
	await knex('comments').insert([
		{
			id: 'f9b6a2e8-af9f-42da-a48c-a3f7af04d263',
			content:
				'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
			product_feedback_id: '5880a4ae-1ddc-48b2-9375-2e8287053192',
			user_id: 'b1d4176e-b3da-41eb-94e8-69cc627c4afa',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '3ac36158-8638-45b3-a009-4ab429ab5c57',
			content:
				'Please use fun, color-coded labels to easily identify them at a glance',
			product_feedback_id: '5880a4ae-1ddc-48b2-9375-2e8287053192',
			user_id: 'ce932f9b-c7f2-4c6b-8975-fa81ac50f4ff',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: 'f2da9815-357a-434e-ba26-eca3278d2574',
			content:
				'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
			product_feedback_id: 'ec483c04-46c2-415b-915a-465d6ec28395',
			user_id: 'a0016427-1868-4f83-95b4-0f2f47dcfc14',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: 'b0c52ff7-820f-4c87-b536-7b286253a26b',
			content:
				'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
			product_feedback_id: 'ec483c04-46c2-415b-915a-465d6ec28395',
			user_id: '2bb3a4c4-b490-46c8-8315-46d159c6f4f5',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '2b0554a0-f3aa-4707-900b-779b9f6ccc3d',
			content:
				'While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme" followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
			product_feedback_id: 'ec483c04-46c2-415b-915a-465d6ec28395',
			user_id: '2ea91f77-c662-4dde-a4b3-7a020d3f760f',
			replying_to_user: 'hummingbird1',
			parent_id: 'b0c52ff7-820f-4c87-b536-7b286253a26b',
		},
		{
			id: 'a7a1f874-93bc-4ac9-b151-a8ada7acf9bf',
			content: `Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.`,
			product_feedback_id: 'ec483c04-46c2-415b-915a-465d6ec28395',
			user_id: 'fc5e827e-bf86-4b7e-b853-d9527d2516df',
			replying_to_user: 'annev1990',
			parent_id: '2b0554a0-f3aa-4707-900b-779b9f6ccc3d',
		},
		{
			id: '4eaf532f-72d4-4d92-aa13-a0f5bffa3dbf',
			content: `Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.`,
			product_feedback_id: 'cda1ba6d-ad80-4aa1-a6de-3b3bdab1c0f3',
			user_id: '9d0a4fa6-10e9-422b-8c77-3296089a1982',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '5af9c985-e33d-4c90-8c97-16cd818f7fc3',
			content: `Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean`,
			product_feedback_id: '1d5e7baf-b964-44ad-92c0-653c48dbba9d',
			user_id: '9d60b626-26e5-447d-b633-df38830df137',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '41fb8ff4-4bc4-4bd5-9141-a643e2fd6c96',
			content: `Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..`,
			product_feedback_id: '1d5e7baf-b964-44ad-92c0-653c48dbba9d',
			user_id: 'fb0c155a-a041-4821-a67e-8678b6aa4a93',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '13d8066d-ff56-4320-a93f-a75cb7542acd',
			content: `I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?`,
			product_feedback_id: '0b721ee7-a93c-4c13-9815-d3907ec8e9a0',
			user_id: 'e276e79a-4571-4f79-a498-103793ac4e20',
			replying_to_user: null,
			parent_id: null,
		},
		{
			id: '276025a5-5b64-4724-8036-78d03ff4fe20',
			content: `Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.`,
			product_feedback_id: '0b721ee7-a93c-4c13-9815-d3907ec8e9a0',
			user_id: 'e276e79a-4571-4f79-a498-103793ac4e20',
			replying_to_user: 'arlen_the_marlin',
			parent_id: '13d8066d-ff56-4320-a93f-a75cb7542acd',
		},
	]);
}
