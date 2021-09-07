"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackCtrl = require('../src/controllers/feedbackController');
const feedbackService = require('../src/services/feedbackService');
const request = require('supertest');
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
        description: 'It would help people with light sensitivities and who prefer dark mode.',
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
    // it.skip('should return 200 OK when getting feedback is valid', (done) => {
    // 	const status = request(app)
    // 		.get('/feedback')
    // 		.then((response: any) => {
    // 			expect(response.status).toBe(200);
    // 			done();
    // 			app.listen(4000).close();
    // 		});
    // });
    it('should return an error', async () => {
        feedbackService.getFeedback = jest
            .fn()
            .mockRejectedValue(new Error('Error'));
        try {
            await feedbackCtrl.getFeedback('', '', '');
        }
        catch (err) {
            expect(err.message).toEqual('Error');
        }
    });
});
