const knexModule = require('../src/config/db/db');
const feedback: any = require('../src/dao/feedback');

const productRequestDb = [
	{
		title: 'Add tags for solutions',
		category: 'enhancement',
		upvotes: 112,
		status: 'suggestion',
		description: 'Easier to search for solutions based on a specific stack.',
		created_at: '2021-09-02T04:50:20.863Z',
	},
	{
		title: 'Add a dark theme option',
		category: 'feature',
		upvotes: 99,
		status: 'suggestion',
		description:
			'It would help people with light sensitivities and who prefer dark mode.',
		created_at: '2021-09-02T04:50:20.863Z',
	},
];

// beforeEach(() => {
// 	knexModule.mockReset();
// });
describe('feedback dao unit tests', () => {
	jest.fn().mockResolvedValue(knexModule);
	describe('feedbackDAO', () => {
		it('should call knex and return all feedback', async () => {
			const knex = await knexModule;
			const result = await knex
				.default(productRequestDb)
				.select(
					'title',
					'category',
					'upvotes',
					'status',
					'description',
					'created_at'
				);
			expect(result).toStrictEqual(productRequestDb);
		});
	});
});
