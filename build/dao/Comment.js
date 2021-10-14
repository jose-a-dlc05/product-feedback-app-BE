var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from '../config/db/db';
import { v4 as uuidv4 } from 'uuid';
class CommentDAO {
    constructor() {
        this.createComment = (comment, userId, feedbackId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const knex = yield db;
                return yield knex('comments').insert({
                    id: uuidv4(),
                    content: comment,
                    product_feedback_id: feedbackId,
                    user_id: userId,
                });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
export default new CommentDAO();
