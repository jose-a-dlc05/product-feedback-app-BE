"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import controller
const feedbackController = require('../controllers/feedbackController');
const router = express_1.default.Router();
router.get(['/', '/feedback'], feedbackController.getFeedback);
router.get('/feedback/:id', feedbackController.getSingleFeedback);
exports.default = router;
