"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db/db"));
const uuid_1 = require("uuid");
class CommentDAO {
    constructor() {
        this.createComment = async (comment, userId, feedbackId) => {
            try {
                const knex = await db_1.default;
                return await knex('comments').insert({
                    id: (0, uuid_1.v4)(),
                    content: comment,
                    product_feedback_id: feedbackId,
                    user_id: userId,
                });
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new CommentDAO();
