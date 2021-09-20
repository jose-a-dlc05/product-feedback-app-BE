"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = __importDefault(require("../dao/Comment"));
class CommentService {
    constructor() {
        this.createComment = async (comment, userId, feedbackId) => {
            try {
                return await Comment_1.default.createComment(comment, userId, feedbackId);
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new CommentService();
