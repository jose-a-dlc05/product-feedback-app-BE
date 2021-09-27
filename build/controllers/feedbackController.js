"use strict";
// Import Service
const feedbackService = require('../services/FeedbackService');
class FeedbackController {
    constructor() {
        this.getFeedback = async (req, res) => {
            try {
                return res.status(200).json(await feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        };
        this.getSingleFeedback = async (req, res) => {
            try {
                const id = req.params.id;
                return res.status(200).json(await feedbackService.getSingleFeedback(id));
            }
            catch (err) {
                console.error(err);
            }
        };
        this.getSingleFeedbackComments = async (req, res) => {
            try {
                const id = req.params.id;
                return res
                    .status(200)
                    .json(await feedbackService.getSingleFeedbackComments(id));
            }
            catch (err) {
                console.error(err);
            }
        };
        this.createFeedback = async (req, res) => {
            try {
                const postData = req.body;
                await feedbackService.createFeedback(postData);
                return res.status(201).json(feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        };
        this.updateFeedback = async (req, res) => {
            try {
                const id = req.params.id;
                const postData = req.body;
                await feedbackService.updateFeedback(postData, id);
                return res.status(200).json(await feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        };
        this.deleteFeedback = async (req, res) => {
            try {
                const id = req.params.id;
                await feedbackService.deleteFeedback(id);
                return res.status(204).send('Feedback Deleted');
            }
            catch (err) {
                console.error(err);
            }
        };
        this.upvoteFeedback = async (req, res) => {
            try {
                const id = req.params.id;
                await feedbackService.upvoteFeedback(id);
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
module.exports = new FeedbackController();
