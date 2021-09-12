//import db
const db = require('../config/db/db');

// create a class called FeedbackDAO and create methods with queries on accessing db:
class FeedbackDAO {
	async getFeedback() {
		const knex = await db;
		return await knex
			.default('product_feedback')
			.join(
				'comments',
				'product_feedback.product_feedback_id',
				'=',
				'comments.product_request_id'
			)
			.select(
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at'
			)
			.count('comments.comment_id as comments')
			.whereNull('comments.reply_id')
			.groupBy(
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at'
			);
	}

	async getSingleFeedback(id: string) {
		const product_feedbackId: number = Number(id);
		const knex = await db;
		return await knex
			.default('product_feedback')
			.select('title', 'category', 'upvotes')
			.where('product_feedback_id', product_feedbackId);
	}
}

// createFeedback(title, category, description)

// export feedbackDAO
module.exports = new FeedbackDAO();
