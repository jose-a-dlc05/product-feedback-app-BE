"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db/db"));
class AuthDAO {
    constructor() {
        this.getUserId = async (userId) => {
            try {
                const knex = await db_1.default;
                const user = await knex('users').where('id', userId).select();
                return user[0].id;
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new AuthDAO();
