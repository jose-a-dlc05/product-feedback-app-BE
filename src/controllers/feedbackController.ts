// Import Service
const feedbackService = require('../services/feedbackService');

class feedbackController {
	getFeedback = async (req: any, res: any, next: any) => {
		try {
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.log(err);
		}
	};
	getSingleFeedback = async (req: any, res: any, next: any) => {
		try {
			const id = req.params.id;
			return res.status(200).json(await feedbackService.getSingleFeedback(id));
		} catch (err) {
			console.log(err);
		}
	};
	getSingleFeedbackComments = async (req: any, res: any, next: any) => {
		try {
			const id = req.params.id;
			return res
				.status(200)
				.json(await feedbackService.getSingleFeedbackComments(id));
		} catch (err) {
			console.log(err);
		}
	};
	createFeedback = async (req: any, res: any, next: any) => {
		try {
			const postData = req.body;
			await feedbackService.createFeedback(postData);
			return res.status(201).json(feedbackService.getFeedback);
		} catch (err) {
			console.log(err);
		}
	};
}

module.exports = new feedbackController();
