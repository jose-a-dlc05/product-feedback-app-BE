"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import db
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../config/db/db"));
class UserDAO {
    async createUser(user, hashPassword, firstName, lastName) {
        const knex = await db_1.default;
        return await knex('users').insert({
            user_id: (0, uuid_1.v4)(),
            first_name: firstName,
            last_name: lastName,
            username: user,
            password: hashPassword,
        });
    }
}
exports.default = new UserDAO();
