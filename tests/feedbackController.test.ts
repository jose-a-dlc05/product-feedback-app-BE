const feedbackCtrl = require('../src/controllers/feedbackController');
const feedbackService = require('../src/services/feedbackService');
const request = require('supertest');
import app from '../src/server';

const productRequestTable = [
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
];

describe('feedbackController', () => {
	it('should return empty array', async () => {
		feedbackService.getFeedback = jest.fn().mockResolvedValue([]);
		const result = await feedbackCtrl.getFeedback('', '', '');
		expect(result).toStrictEqual([]);
	});
	it('should return all feedback', async () => {
		feedbackService.getFeedback = jest
			.fn()
			.mockResolvedValue(productRequestTable);
		const result = await feedbackCtrl.getFeedback('', '', '');
		expect(result).toStrictEqual(productRequestTable);
	});
	it('should return an error', async () => {
		feedbackService.getFeedback = jest
			.fn()
			.mockRejectedValue(new Error('Error'));
		try {
			await feedbackCtrl.getFeedback('', '', '');
		} catch (err: any) {
			expect(err.message).toEqual('Error');
		}
	});
});
