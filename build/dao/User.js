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
//import db
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../config/db/db"));
const Helper_1 = __importDefault(require("../controllers/Helper"));
class UserDAO {
    createUser(user, hashPassword, firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = yield db_1.default;
            return yield knex('users')
                .insert({
                id: (0, uuid_1.v4)(),
                first_name: firstName,
                last_name: lastName,
                username: user,
                password: hashPassword,
            })
                .returning('id');
        });
    }
    loginUser(user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = yield db_1.default;
            const loggedUser = yield knex('users').where('username', user).select();
            if (loggedUser[0].username !== user) {
                throw new Error('The user login you provided is incorrect');
            }
            if (!Helper_1.default.comparePassword(loggedUser[0].password, password)) {
                throw new Error('The password you provided is incorrect');
            }
            return loggedUser[0];
        });
    }
}
exports.default = new UserDAO();
