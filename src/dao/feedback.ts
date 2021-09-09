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
}

// createFeedback(title, category, description)

// export feedbackDAO
module.exports = new FeedbackDAO();
