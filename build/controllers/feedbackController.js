"use strict";
// Import Service
const feedbackService = require('../services/feedbackService');
class feedbackController {
    constructor() {
        this.getFeedback = async (req, res, next) => {
            try {
                return res.status(200).json(await feedbackService.getFeedback());
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getSingleFeedback = async (req, res, next) => {
            try {
                const id = req.params.id;
                return res.status(200).json(await feedbackService.getSingleFeedback(id));
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getSingleFeedbackComments = async (req, res, next) => {
            try {
                const id = req.params.id;
                return res
                    .status(200)
                    .json(await feedbackService.getSingleFeedbackComments(id));
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
module.exports = new feedbackController();
