"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../middleware/Auth"));
// Import controller
const FeedbackController = require('../controllers/FeedbackController');
const UserController = require('../controllers/UserController');
const CommentController = require('../controllers/CommentController');
const router = express_1.default.Router();
// FEEDBACK
// Show all feedback
router.get(['/', '/feedback'], FeedbackController.getFeedback);
// Show one feedback
router.get(['/:id', '/feedback/:id'], FeedbackController.getSingleFeedback);
// Update a feedback
router.put(['/:id', '/feedback/:id'], FeedbackController.updateFeedback);
// Show comments within feedback
router.get(['/:id/comments', '/feedback/:id/comments'], FeedbackController.getSingleFeedbackComments);
// Add new feedback to database
router.post(['/', '/feedback'], FeedbackController.createFeedback);
// Delete feedback from database
router.delete(['/:id', '/feedback/:id'], FeedbackController.deleteFeedback);
// Upvote Feedback
router.put([':/id', '/feedback/:id'], FeedbackController.upvoteFeedback);
// USER
// Create User
router.post('/users', UserController.createUser);
// Login User
router.post('/users/login', UserController.loginUser);
// COMMENTS
router.post(['/:id/comments', '/feedback/:id/comments'], Auth_1.default.verifyToken, CommentController.createComment);
exports.default = router;
