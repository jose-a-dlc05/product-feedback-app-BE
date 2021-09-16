"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import controller
const feedbackController = require('../controllers/feedbackController');
const router = express_1.default.Router();
// Show all comments
router.get(['/', '/feedback'], feedbackController.getFeedback);
// Show one feedback
router.get(['/:id', '/feedback/:id'], feedbackController.getSingleFeedback);
// Update a feedback
router.put(['/:id', '/feedback/:id'], feedbackController.updateFeedback);
// Show comments within feedback
router.get(['/:id/comments', '/feedback/:id/comments'], feedbackController.getSingleFeedbackComments);
// Add new feedback to database
router.post(['/', '/feedback'], feedbackController.createFeedback);
// Delete feedback from database
router.delete(['/:id', '/feedback/:id'], feedbackController.deleteFeedback);
exports.default = router;
