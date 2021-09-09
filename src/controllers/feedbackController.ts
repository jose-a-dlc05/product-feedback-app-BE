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
}

module.exports = new feedbackController();
