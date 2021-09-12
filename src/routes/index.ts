import express from 'express';
// import controller
const feedbackController = require('../controllers/feedbackController');

const router: express.Router = express.Router();

// Show all comments
router.get(['/', '/feedback'], feedbackController.getFeedback);

// Show one feedback
router.get(['/:id', '/feedback/:id'], feedbackController.getSingleFeedback);

// Show comments within feedback
router.get(
	['/:id/comments', '/feedback/:id/comments'],
	feedbackController.getSingleFeedbackComments
);

// Add new feedback to database
router.post(['/', '/feedback'], feedbackController.createFeedback);

export default router;
