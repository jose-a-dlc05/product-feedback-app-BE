export const productRequestDbAll = [
	{
		category: 'feature',
		comments: '0',
		created_at: new Date('2021-10-11T13:54:26.086Z'),
		description:
			'It would be great to see a more detailed breakdown of solutions.',
		id: '1dfc20bc-9401-4bf2-8259-878165273ce5',
		status: 'suggestion',
		title: 'More comprehensive reports',
		updated_at: new Date('2021-10-11T13:54:26.086Z'),
		upvotes: 0,
	},
	{
		category: 'enhancement',
		comments: '2',
		created_at: new Date('2021-10-11T12:06:14.206Z'),
		description: 'Images and screencasts can enhance comments on solutions.',
		id: '1d5e7baf-b964-44ad-92c0-653c48dbba9d',
		status: 'suggestion',
		title: 'Add image/video upload to feedback',
		updated_at: new Date('2021-10-11T12:06:14.206Z'),
		upvotes: 51,
	},
	{
		category: 'feature',
		comments: '2',
		created_at: new Date('2021-10-11T12:06:14.206Z'),
		description: 'Stay updated on comments and solutions other people post.',
		id: '0b721ee7-a93c-4c13-9815-d3907ec8e9a0',
		status: 'suggestion',
		title: 'Ability to follow others',
		updated_at: new Date('2021-10-11T12:06:14.206Z'),
		upvotes: 42,
	},
	{
		category: 'feature',
		comments: '1',
		created_at: new Date('2021-10-11T12:06:14.206Z'),
		description: 'Challenge-specific Q&A would make for easy reference.',
		id: 'cda1ba6d-ad80-4aa1-a6de-3b3bdab1c0f3',
		status: 'suggestion',
		title: 'Q&A within the challenge hubs',
		updated_at: new Date('2021-10-11T12:06:14.206Z'),
		upvotes: 65,
	},
	{
		category: 'feature',
		comments: '4',
		created_at: new Date('2021-10-11T12:06:14.206Z'),
		description:
			'It would help people with light sensitivities and who prefer dark mode.',
		id: 'ec483c04-46c2-415b-915a-465d6ec28395',
		status: 'suggestion',
		title: 'Add a dark theme option',
		updated_at: new Date('2021-10-11T12:06:14.206Z'),
		upvotes: 99,
	},
	{
		category: 'enhancement',
		comments: '2',
		created_at: new Date('2021-10-11T12:06:14.206Z'),
		description: 'Easier to search for solutions based on a specific stack.',
		id: '5880a4ae-1ddc-48b2-9375-2e8287053192',
		status: 'suggestion',
		title: 'Add tags for solutions',
		updated_at: new Date('2021-10-11T12:06:14.206Z'),
		upvotes: 112,
	},
];

export const productRequestDbSingle = [
	{
		id: '5880a4ae-1ddc-48b2-9375-2e8287053192',
		title: 'Add tags for solutions',
		category: 'enhancement',
		upvotes: 112,
		status: 'suggestion',
		description: 'Easier to search for solutions based on a specific stack.',
	},
];

module.exports = { productRequestDbSingle, productRequestDbAll };
