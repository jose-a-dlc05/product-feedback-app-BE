"use strict";
// import dao
const feedbackDAO = require('../dao/feedback');
class FeedbackService {
    async getFeedback() {
        try {
            return await feedbackDAO.getFeedback();
        }
        catch (err) {
            console.log(err);
        }
    }
    async getSingleFeedback(id) {
        try {
            return await feedbackDAO.getSingleFeedback(id);
        }
        catch (err) {
            console.log(err);
        }
    }
    async getSingleFeedbackComments(id) {
        try {
            const comments = await feedbackDAO.getSingleFeedbackComments(id);
            if (comments.length > 0) {
                return comments;
            }
            else {
                return 'No Comments for this feedback';
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async createFeedback(data) {
        try {
            let { feedback_title: feedbackTitle, category, feedback_detail: feedbackDetail, } = data;
            return await feedbackDAO.createFeedback(feedbackTitle, category, feedbackDetail);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = new FeedbackService();
