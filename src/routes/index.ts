import express from 'express';
// import controller
const feedbackController = require('../controllers/feedbackController');

const router: express.Router = express.Router();

router.get(['/', '/feedback'], feedbackController.getFeedback);

router.get('/feedback/:id', feedbackController.getSingleFeedback);

export default router;
