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

jest.mock(
	'../src/config/db/db',
	jest.fn(() =>
		Promise.resolve({
			default: jest.fn(),
			leftJoin: jest.fn(),
			select: jest.fn(),
			count: jest.fn(),
			groupBy: jest.fn(),
		} as unknown)
	)
);
const db = require('../src/config/db/db');

describe('feedback dao unit tests', () => {
	describe('feedbackDAO', () => {
		it('should call knex and return all feedback', async () => {
			const knex = await db;
			knex.default.mockReturnThis();
			knex.leftJoin.mockReturnThis();
			knex.select.mockReturnThis();
			knex.count.mockReturnThis();
			knex.groupBy.mockResolvedValue(productRequestDb);
			const result = await feedback.getFeedback();
			expect(result).toStrictEqual(productRequestDb);
		});
	});
});
