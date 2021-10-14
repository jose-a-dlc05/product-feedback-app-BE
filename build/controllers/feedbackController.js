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
// Import Service
const feedbackService = require('../services/FeedbackService');
class FeedbackController {
    constructor() {
        this.getFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(yield feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        });
        this.getSingleFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                return res.status(200).json(yield feedbackService.getSingleFeedback(id));
            }
            catch (err) {
                console.error(err);
            }
        });
        this.getSingleFeedbackComments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                return res
                    .status(200)
                    .json(yield feedbackService.getSingleFeedbackComments(id));
            }
            catch (err) {
                console.error(err);
            }
        });
        this.createFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postData = req.body;
                yield feedbackService.createFeedback(postData);
                return res.status(201).json(feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        });
        this.updateFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const postData = req.body;
                yield feedbackService.updateFeedback(postData, id);
                return res.status(200).json(yield feedbackService.getFeedback());
            }
            catch (err) {
                console.error(err);
            }
        });
        this.deleteFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield feedbackService.deleteFeedback(id);
                return res.status(204).send('Feedback Deleted');
            }
            catch (err) {
                console.error(err);
            }
        });
        this.upvoteFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield feedbackService.upvoteFeedback(id);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
module.exports = new FeedbackController();
