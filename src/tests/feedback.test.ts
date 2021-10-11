const feedback: any = require('../src/dao/feedback');
const productRequestDbAll = require('./productRequestDb');
const productRequestDbSingle = require('./productRequestDb');

jest.mock(
	'../src/config/db/db',
	jest.fn(() =>
		Promise.resolve({
			default: jest.fn(),
			leftJoin: jest.fn(),
			select: jest.fn(),
			count: jest.fn(),
			groupBy: jest.fn(),
			where: jest.fn(),
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
			knex.groupBy.mockResolvedValue(productRequestDbAll);
			const result = await feedback.getFeedback();
			expect(result).toStrictEqual(productRequestDbAll);
		});

		it('should call knex and return single feedback', async () => {
			const productFeedbackId: string = '6ea1ed94-e08e-4bf1-9cb3-d087e4ed9d3f';
			const knex = await db;
			knex.default.mockReturnThis();
			knex.select.mockReturnThis();
			knex.where.mockResolvedValue(productRequestDbSingle);
			const result = await feedback.getSingleFeedback(productFeedbackId);
			expect(result).toStrictEqual(productRequestDbSingle);
		});
	});
});
