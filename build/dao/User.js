"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import db
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../config/db/db"));
const Helper_1 = __importDefault(require("../controllers/Helper"));
class UserDAO {
    async createUser(user, hashPassword, firstName, lastName) {
        const knex = await db_1.default;
        return await knex('users')
            .insert({
            id: uuid_1.v4(),
            first_name: firstName,
            last_name: lastName,
            username: user,
            password: hashPassword,
        })
            .returning('id');
    }
    async loginUser(user, password) {
        const knex = await db_1.default;
        const loggedUser = await knex('users').where('username', user).select();
        if (loggedUser[0].username !== user) {
            throw new Error('The user login you provided is incorrect');
        }
        if (!Helper_1.default.comparePassword(loggedUser[0].password, password)) {
            throw new Error('The password you provided is incorrect');
        }
        return loggedUser[0];
    }
}
exports.default = new UserDAO();
