const feedback: any = require('../src/dao/feedback');
import Knex from 'knex';

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

jest.mock('../src/config/db/db', () =>
	jest.fn(() =>
		Promise.resolve({
			default: jest.fn().mockReturnThis(),
			leftJoin: jest.fn().mockReturnThis(),
			select: jest.fn().mockReturnThis(),
			count: jest.fn().mockReturnThis(),
			groupBy: jest.fn().mockResolvedValue(productRequestDb),
		} as unknown)
	)
);
const db = require('../src/config/db/db');

console.log(db);
describe('feedback dao unit tests', () => {
	describe('feedbackDAO', () => {
		it('should call knex and return all feedback', async () => {
			const result = await feedback.getFeedback();
			expect(result).toStrictEqual(productRequestDb);
		});
	});
});
