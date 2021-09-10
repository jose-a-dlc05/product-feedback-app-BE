"use strict";
// import dao
const feedbackDAO = require('../dao/feedback');
class FeedbackService {
    async getFeedback() {
        return [];
        // return await feedbackDAO.getFeedback();
    }
}
module.exports = new FeedbackService();
