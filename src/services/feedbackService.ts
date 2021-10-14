// import dao
const feedbackDAO = require('../dao/feedback');

class FeedbackService {
	async getFeedback() {
		try {
			return await feedbackDAO.getFeedback();
		} catch (err) {
			console.error(err);
		}
	}

	async getSingleFeedback(id: string) {
		try {
			const feedbackId = id;
			return await feedbackDAO.getSingleFeedback(feedbackId);
		} catch (err) {
			console.error(err);
		}
	}

	async getSingleFeedbackComments(id: string) {
		try {
			const feedbackId = id;
			const comments = await feedbackDAO.getSingleFeedbackComments(feedbackId);
			if (comments.length > 0) {
				return comments;
			} else {
				return 'No Comments for this feedback';
			}
		} catch (err) {
			console.error(err);
		}
	}

	async createFeedback(data: object) {
		try {
			let {
				feedback_title: feedbackTitle,
				category,
				feedback_detail: feedbackDetail,
			}: any = data;
			return await feedbackDAO.createFeedback(
				feedbackTitle,
				category,
				feedbackDetail
			);
		} catch (err) {
			console.error(err);
		}
	}

	async updateFeedback(data: object, id: string) {
		try {
			let { title, category, status, description }: any = data;
			return await feedbackDAO.updateFeedback(
				title,
				category,
				status,
				description,
				id
			);
		} catch (err) {
			console.error(err);
		}
	}

	async deleteFeedback(id: string) {
		try {
			const feedbackId = id;
			return await feedbackDAO.deleteFeedback(feedbackId);
		} catch (err) {
			console.error(err);
		}
	}

	async upvoteFeedback(id: string) {
		try {
			const feedbackId = id;
			return await feedbackDAO.upvoteFeedback(feedbackId);
		} catch (err) {
			console.error(err);
		}
	}
}

module.exports = new FeedbackService();
