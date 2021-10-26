const feedbackServ: any = require('../services/FeedbackService');
const feedbackDataObject: any = require('../dao/Feedback');
const productRequestTable = require('./feedbackController.test');

describe('feedbackService Unit Tests', () => {
	describe('when calling getFeedback ', () => {
		it('should return all feedback', async () => {
			feedbackDataObject.getFeedback = jest
				.fn()
				.mockResolvedValue(productRequestTable);
			const result = await feedbackDataObject.getFeedback();
			expect(result).toStrictEqual(productRequestTable);
		});
		it('should return an empty array', async () => {
			feedbackDataObject.getFeedback = jest.fn().mockResolvedValue([]);
			const result = await feedbackDataObject.getFeedback();
			expect(result).toStrictEqual([]);
		});
	});
	describe('when an error occurs', () => {
		it('should return an error', async () => {
			feedbackDataObject.getFeedback = jest
				.fn()
				.mockRejectedValue(new Error('Error'));
			try {
				await feedbackDataObject.getFeedback();
			} catch (err: any) {
				expect(err.message).toEqual('Error');
			}
		});
	});
});
