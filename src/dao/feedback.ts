//import db
const db = require('../config/db/db');
import { v4 as uuidv4 } from 'uuid';

// create a class called FeedbackDAO and create methods with queries on accessing db:
class FeedbackDAO {
	async getFeedback() {
		const knex = await db;
		return await knex
			.default('product_feedback')
			.leftJoin(
				'comments',
				'product_feedback.id',
				'=',
				'comments.product_feedback_id'
			)
			.select(
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at',
				'product_feedback.updated_at'
			)
			.count('comments.id as comments')
			.groupBy(
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at',
				'product_feedback.updated_at'
			);
	}

	async getSingleFeedback(id: string) {
		const product_feedbackId: string = id;
		const knex = await db;
		return await knex
			.default('product_feedback')
			.select('title', 'category', 'upvotes', 'status', 'description')
			.where('id', product_feedbackId);
	}

	async getSingleFeedbackComments(id: string) {
		const product_feedbackId: string = id;
		const knex = await db;
		return await knex
			.default('comments')
			.select('content', 'id', 'replying_to_user', 'parent_id', 'created_at')
			.where('id', product_feedbackId);
	}

	async createFeedback(
		feedbackTitle: string,
		category: string,
		feedbackDetail: string
	) {
		const knex = await db;
		return await knex.default('product_feedback').insert({
			id: uuidv4(),
			title: feedbackTitle,
			category,
			upvotes: 0,
			status: 'suggestion',
			description: feedbackDetail,
		});
	}

	async updateFeedback(
		title: string,
		category: string,
		status: string,
		description: string,
		id: string
	) {
		const knex = await db;
		return await knex.default('product_feedback').where('id', id).update({
			title,
			category,
			status,
			description,
		});
	}

	async deleteFeedback(id: string) {
		const feedbackId: string = id;
		const knex = await db;
		return await knex.default('product_feedback').where('id', feedbackId).del();
	}
}

// createFeedback(title, category, description)

// export feedbackDAO
module.exports = new FeedbackDAO();
