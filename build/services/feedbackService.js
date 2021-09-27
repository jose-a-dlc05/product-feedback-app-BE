"use strict";
// import dao
const feedbackDAO = require('../dao/Feedback');
class FeedbackService {
    async getFeedback() {
        try {
            return await feedbackDAO.getFeedback();
        }
        catch (err) {
            console.error(err);
        }
    }
    async getSingleFeedback(id) {
        try {
            const feedbackId = id;
            return await feedbackDAO.getSingleFeedback(feedbackId);
        }
        catch (err) {
            console.error(err);
        }
    }
    async getSingleFeedbackComments(id) {
        try {
            const feedbackId = id;
            const comments = await feedbackDAO.getSingleFeedbackComments(feedbackId);
            if (comments.length > 0) {
                return comments;
            }
            else {
                return 'No Comments for this feedback';
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async createFeedback(data) {
        try {
            let { feedback_title: feedbackTitle, category, feedback_detail: feedbackDetail, } = data;
            return await feedbackDAO.createFeedback(feedbackTitle, category, feedbackDetail);
        }
        catch (err) {
            console.error(err);
        }
    }
    async updateFeedback(data, id) {
        try {
            let { title, category, status, description } = data;
            return await feedbackDAO.updateFeedback(title, category, status, description, id);
        }
        catch (err) {
            console.error(err);
        }
    }
    async deleteFeedback(id) {
        try {
            const feedbackId = id;
            return await feedbackDAO.deleteFeedback(feedbackId);
        }
        catch (err) {
            console.error(err);
        }
    }
    async upvoteFeedback(id) {
        try {
            const feedbackId = id;
            return await feedbackDAO.upvoteFeedback(feedbackId);
        }
        catch (err) {
            console.error(err);
        }
    }
}
module.exports = new FeedbackService();
