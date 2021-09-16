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
        this.createFeedback = async (req, res, next) => {
            try {
                const postData = req.body;
                await feedbackService.createFeedback(postData);
                return res.status(201).json(feedbackService.getFeedback());
            }
            catch (err) {
                console.log(err);
            }
        };
        this.updateFeedback = async (req, res, next) => {
            try {
                const id = req.params.id;
                const postData = req.body;
                await feedbackService.updateFeedback(postData, id);
                return res.status(200).json(await feedbackService.getFeedback());
            }
            catch (err) {
                console.log(err);
            }
        };
        this.deleteFeedback = async (req, res, next) => {
            try {
                const id = req.params.id;
                await feedbackService.deleteFeedback(id);
                return res.status(204).send('Feedback Deleted');
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
module.exports = new feedbackController();
