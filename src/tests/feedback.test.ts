const feedback: any = require('../dao/Feedback');
const productRequest = require('./productRequestDb');

const { productRequestDbAll, productRequestDbSingle } = productRequest;

jest.mock(
	'../config/db/db',
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
const db = require('../config/db/db');

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
			const productFeedbackId: string = '5880a4ae-1ddc-48b2-9375-2e8287053192';
			const knex = await db;
			knex.default.mockReturnThis();
			knex.select.mockReturnThis();
			knex.where.mockResolvedValue(productRequestDbSingle);
			const result = await feedback.getSingleFeedback(productFeedbackId);
			expect(result).toStrictEqual(productRequestDbSingle);
		});
	});
});
