import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('product_feedback').del();

	// Inserts seed entries
	await knex('product_feedback').insert([
		{
			product_feedback_id: 1,
			title: 'Add tags for solutions',
			category: 'enhancement',
			upvotes: 112,
			status: 'suggestion',
			description: 'Easier to search for solutions based on a specific stack.',
		},
		{
			product_feedback_id: 2,
			title: 'Add a dark theme option',
			category: 'feature',
			upvotes: 99,
			status: 'suggestion',
			description:
				'It would help people with light sensitivities and who prefer dark mode.',
		},
		{
			product_feedback_id: 3,
			title: 'Q&A within the challenge hubs',
			category: 'feature',
			upvotes: 65,
			status: 'suggestion',
			description: 'Challenge-specific Q&A would make for easy reference.',
		},
		{
			product_feedback_id: 4,
			title: 'Add image/video upload to feedback',
			category: 'enhancement',
			upvotes: 51,
			status: 'suggestion',
			description: 'Images and screencasts can enhance comments on solutions.',
		},
		{
			product_feedback_id: 5,
			title: 'Ability to follow others',
			category: 'feature',
			upvotes: 42,
			status: 'suggestion',
			description: 'Stay updated on comments and solutions other people post.',
		},
	]);
}
