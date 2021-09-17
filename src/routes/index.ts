import express from 'express';
// Import controller
const feedbackController = require('../controllers/feedbackController');

const router: express.Router = express.Router();

// FEEDBACK
// Show all feedback
router.get(['/', '/feedback'], feedbackController.getFeedback);
// Show one feedback
router.get(['/:id', '/feedback/:id'], feedbackController.getSingleFeedback);
// Update a feedback
router.put(['/:id', '/feedback/:id'], feedbackController.updateFeedback);
// Show comments within feedback
router.get(
	['/:id/comments', '/feedback/:id/comments'],
	feedbackController.getSingleFeedbackComments
);
// Add new feedback to database
router.post(['/', '/feedback'], feedbackController.createFeedback);
// Delete feedback from database
router.delete(['/:id', '/feedback/:id'], feedbackController.deleteFeedback);

export default router;
