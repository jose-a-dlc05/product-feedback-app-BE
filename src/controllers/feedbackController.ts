// Import Service
const feedbackService = require('../services/feedbackService');

class feedbackController {
	getFeedback = (req: any, res: any, next: any): any => {
		try {
			return feedbackService.getFeedback();
			// return successful status 200
		} catch (err) {
			console.log(err);
		}
	};
}

module.exports = new feedbackController();
