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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db/db"));
const uuid_1 = require("uuid");
class CommentDAO {
    constructor() {
        this.createComment = (comment, userId, feedbackId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const knex = yield db_1.default;
                return yield knex('comments').insert({
                    id: (0, uuid_1.v4)(),
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
exports.default = new CommentDAO();
