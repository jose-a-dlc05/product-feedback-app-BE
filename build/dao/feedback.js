"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import db
const db = require('../config/db/db');
const uuid_1 = require("uuid");
// create a class called FeedbackDAO and create methods with queries on accessing db:
class FeedbackDAO {
    getFeedback() {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = yield db;
            return yield knex
                .default('product_feedback')
                .leftJoin('comments', 'product_feedback.id', '=', 'comments.product_feedback_id')
                .select('product_feedback.title', 'product_feedback.category', 'product_feedback.upvotes', 'product_feedback.status', 'product_feedback.description', 'product_feedback.created_at', 'product_feedback.updated_at')
                .count('comments.id as comments')
                .groupBy('product_feedback.title', 'product_feedback.category', 'product_feedback.upvotes', 'product_feedback.status', 'product_feedback.description', 'product_feedback.created_at', 'product_feedback.updated_at');
        });
    }
    getSingleFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productFeedbackId = id;
            const knex = yield db;
            return yield knex
                .default('product_feedback')
                .select('title', 'category', 'upvotes', 'status', 'description')
                .where('id', productFeedbackId);
        });
    }
    getSingleFeedbackComments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productFeedbackId = id;
            const knex = yield db;
            const comments = yield knex
                .default('comments')
                .select('content', 'id', 'replying_to_user', 'parent_id', 'created_at')
                .where('product_feedback_id', productFeedbackId);
            return comments;
        });
    }
    createFeedback(feedbackTitle, category, feedbackDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = yield db;
            return yield knex.default('product_feedback').insert({
                id: uuid_1.v4(),
                title: feedbackTitle,
                category,
                upvotes: 0,
                status: 'suggestion',
                description: feedbackDetail,
            });
        });
    }
    updateFeedback(title, category, status, description, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = yield db;
            return yield knex.default('product_feedback').where('id', id).update({
                title,
                category,
                status,
                description,
            });
        });
    }
    deleteFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const feedbackId = id;
            const knex = yield db;
            return yield knex.default('product_feedback').where('id', feedbackId).del();
        });
    }
}
// createFeedback(title, category, description)
// export feedbackDAO
module.exports = new FeedbackDAO();
