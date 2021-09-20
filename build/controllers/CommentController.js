"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommentService_1 = __importDefault(require("../services/CommentService"));
class CommentController {
    constructor() {
        /**
         * Create Comment
         * @params {object} req
         * @params {object} res
         * @returns {object} CommentController object
         */
        this.createComment = async (req, res) => {
            try {
                if (!req.body.comment || !req.params.id || !req.user.id) {
                    return res.status(400).send({ message: 'There is no value' });
                }
                const { comment } = req.body;
                const commentCreated = await CommentService_1.default.createComment(comment, req.user.id, req.params.id);
                console.log(commentCreated);
                return res.status(201).json(commentCreated);
            }
            catch (err) {
                return res.status(400).send(err);
            }
        };
    }
}
module.exports = new CommentController();
