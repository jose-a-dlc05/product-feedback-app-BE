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
// import dao
const feedbackDAO = require('../dao/Feedback');
class FeedbackService {
    getFeedback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield feedbackDAO.getFeedback();
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    getSingleFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const feedbackId = id;
                return yield feedbackDAO.getSingleFeedback(feedbackId);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    getSingleFeedbackComments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const feedbackId = id;
                const comments = yield feedbackDAO.getSingleFeedbackComments(feedbackId);
                if (comments.length > 0) {
                    return comments;
                }
                else {
                    return 'No Comments for this feedback';
                }
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    createFeedback(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { feedback_title: feedbackTitle, category, feedback_detail: feedbackDetail, } = data;
                return yield feedbackDAO.createFeedback(feedbackTitle, category, feedbackDetail);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    updateFeedback(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title, category, status, description } = data;
                return yield feedbackDAO.updateFeedback(title, category, status, description, id);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    deleteFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const feedbackId = id;
                return yield feedbackDAO.deleteFeedback(feedbackId);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    upvoteFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const feedbackId = id;
                return yield feedbackDAO.upvoteFeedback(feedbackId);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
module.exports = new FeedbackService();
