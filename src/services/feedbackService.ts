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
}

module.exports = new FeedbackService();
