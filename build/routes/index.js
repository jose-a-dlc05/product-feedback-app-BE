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
router.get(['/', '/feedbackproduct'], FeedbackController.getFeedback);
// Show one feedback
router.get(['/:id', '/feedbackproduct/:id'], FeedbackController.getSingleFeedback);
// Update a feedback
router.put(['/:id', '/feedbackproduct/:id'], FeedbackController.updateFeedback);
// Show comments within feedback
router.get(['/:id/comments', '/feedbackproduct/:id/comments'], FeedbackController.getSingleFeedbackComments);
// Add new feedback to database
router.post(['/', '/feedbackproduct'], FeedbackController.createFeedback);
// Delete feedback from database
router.delete(['/:id', '/feedbackproduct/:id'], FeedbackController.deleteFeedback);
// Upvote Feedback
router.put([':/id', '/feedbackproduct/:id'], FeedbackController.upvoteFeedback);
// USER
// Create User
router.post('/users', UserController.createUser);
// Login User
router.post('/users/login', UserController.loginUser);
// COMMENTS
router.post(['/:id/comments', '/feedbackproduct/:id/comments'], Auth_1.default.verifyToken, CommentController.createComment);
exports.default = router;
