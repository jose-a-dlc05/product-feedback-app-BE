// import dao
const feedbackDAO = require('../dao/feedback');

class FeedbackService {
	async getFeedback() {
		try {
			return await feedbackDAO.getFeedback();
		} catch (err) {
			console.log(err);
		}
	}

	async getSingleFeedback(id: string) {
		try {
			return await feedbackDAO.getSingleFeedback(id);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = new FeedbackService();
