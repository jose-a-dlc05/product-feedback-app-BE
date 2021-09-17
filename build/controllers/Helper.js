"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("../lib/env");
const Helper = {
    /**
     * Hash Password Method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    hashPassword(password) {
        return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(8));
    },
    /**
     * comparePassword
     * @param {string} hashPassword
     * @param {string} password
     * @returns {Boolean} return True or False
     */
    comparePassword(hashPassword, password) {
        return bcrypt_1.default.compareSync(password, hashPassword);
    },
    /**
     * Gnerate Token
     * @param {string} id
     * @returns {string} token
     */
    generateToken(id) {
        const token = jsonwebtoken_1.default.sign({
            userId: id,
        }, process.env.SECRET, { expiresIn: '7d' });
        return token;
    },
};
exports.default = Helper;
