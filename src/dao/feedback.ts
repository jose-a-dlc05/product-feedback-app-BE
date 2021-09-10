//import db
const db = require('../config/db/db');

// create a class called FeedbackDAO and create methods with queries on accessing db:
class FeedbackDAO {
	async getFeedback() {
		// getFeedback()
		const knex = await db;
		return await knex
			.default('product_feedback')
			.select(
				'title',
				'category',
				'upvotes',
				'status',
				'description',
				'created_at'
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
