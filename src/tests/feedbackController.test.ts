// const feedbackCtrl = require('../src/controllers/feedbackController');
// const feedbackService = require('../src/services/feedbackService');
// import app from '..';

// const productRequestTable = [
// 	{
// 		title: 'Add tags for solutions',
// 		category: 'enhancement',
// 		upvotes: 112,
// 		status: 'suggestion',
// 		description: 'Easier to search for solutions based on a specific stack.',
// 	},
// 	{
// 		product_feedback_id: 2,
// 		title: 'Add a dark theme option',
// 		category: 'feature',
// 		upvotes: 99,
// 		status: 'suggestion',
// 		description:
// 			'It would help people with light sensitivities and who prefer dark mode.',
// 	},
// ];

// describe('feedbackController Unit Tests', () => {
// 	const res = {
// 		status: () => ({
// 			json: (data: any) => {
// 				return data;
// 			},
// 		}),
// 	};
// 	it('should return empty array', async () => {
// 		feedbackService.getFeedback = jest.fn().mockResolvedValue([]);
// 		const result = await feedbackCtrl.getFeedback('', res, '');
// 		expect(result).toStrictEqual([]);
// 	});
// 	it('should return all feedback', async () => {
// 		feedbackService.getFeedback = jest
// 			.fn()
// 			.mockResolvedValue(productRequestTable);
// 		const result = await feedbackCtrl.getFeedback('', res, '');
// 		expect(result).toStrictEqual(productRequestTable);
// 	});
// 	it('should return an error', async () => {
// 		const asyncMock = (feedbackService.getFeedback = jest
// 			.fn()
// 			.mockRejectedValue(new Error('Error')));
// 		try {
// 			await asyncMock();
// 		} catch (err: any) {
// 			expect(err.message).toEqual('Error');
// 		}
// 	});

// 	describe('when getting a single feedback', () => {
// 		const req = {
// 			params: {
// 				id: 1,
// 			},
// 		};
// 		describe('when an error occurs', () => {
// 			it('should return an error', async () => {
// 				const asyncMock = (feedbackService.getSingleFeedback = jest
// 					.fn()
// 					.mockRejectedValue(new Error('Error')));
// 				try {
// 					await asyncMock();
// 				} catch (err: any) {
// 					expect(err.message).toEqual('Error');
// 				}
// 			});
// 		});
// 		describe('when getting correctly a single feedback', () => {
// 			it('should return a single feedback', async () => {
// 				feedbackService.getSingleFeedback = jest
// 					.fn()
// 					.mockResolvedValue(productRequestTable[0]);
// 				const result = await feedbackCtrl.getSingleFeedback(req, res, '');
// 				expect(result).toEqual(productRequestTable[0]);
// 				expect(feedbackService.getSingleFeedback).toHaveBeenCalledTimes(1);
// 				expect(feedbackService.getSingleFeedback).toHaveBeenCalledWith(1);
// 			});
// 		});
// 	});
// });

// module.exports = productRequestTable;
