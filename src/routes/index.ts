import express from 'express';
// Import controller
const FeedbackController = require('../controllers/FeedbackController');
const UserController = require('../controllers/UserController');

const router: express.Router = express.Router();

// FEEDBACK
// Show all feedback
router.get(['/', '/feedback'], FeedbackController.getFeedback);
// Show one feedback
router.get(['/:id', '/feedback/:id'], FeedbackController.getSingleFeedback);
// Update a feedback
router.put(['/:id', '/feedback/:id'], FeedbackController.updateFeedback);
// Show comments within feedback
router.get(
	['/:id/comments', '/feedback/:id/comments'],
	FeedbackController.getSingleFeedbackComments
);
// Add new feedback to database
router.post(['/', '/feedback'], FeedbackController.createFeedback);
// Delete feedback from database
router.delete(['/:id', '/feedback/:id'], FeedbackController.deleteFeedback);

// USER
// Create User
router.post('/users', UserController.createUser);

// Login User
router.post('/users/login', UserController.loginUser);

export default router;
