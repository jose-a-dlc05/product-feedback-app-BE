"use strict";
// Import Service
const feedbackService = require('../services/feedbackService');
class feedbackController {
    constructor() {
        this.getFeedback = (req, res, next) => {
            try {
                return feedbackService.getFeedback();
                // return successful status 200
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
module.exports = new feedbackController();
