var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CommentService from '../services/CommentService';
class CommentController {
    constructor() {
        /**
         * Create Comment
         * @params {object} req
         * @params {object} res
         * @returns {object} CommentController object
         */
        this.createComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.comment || !req.params.id || !req.user.id) {
                    return res.status(400).send({ message: 'There is no value' });
                }
                const { comment } = req.body;
                const commentCreated = yield CommentService.createComment(comment, req.user.id, req.params.id);
                console.log(commentCreated);
                return res.status(201).json(commentCreated);
            }
            catch (err) {
                return res.status(400).send(err);
            }
        });
    }
}
module.exports = new CommentController();
