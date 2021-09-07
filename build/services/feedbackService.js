"use strict";
// import dao
const feedbackDAO = require('../dao/feedback');
class FeedbackService {
    getFeedback() {
        return feedbackDAO.getFeedback();
    }
}
module.exports = new FeedbackService();
