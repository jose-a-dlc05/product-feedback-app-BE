"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../config/db/db"));
require("../lib/env");
class Auth {
    constructor() {
        /**
         * Verify Token
         * @param {object} req
         * @param {object} res
         * @param {object} next
         * @returns {object|void} response object
         */
        this.verifyToken = async (req, res, next) => {
            // The req.headers['x-access-token'] gets the token from the request header and sends it to
            // jwt.verify along with the secret we used to sign the token.
            // If the token is valid, we retrieve the userId from the token payload and query the DB to make sure
            // the user exists in the DB.
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(400).send({ message: 'Token is not provided' });
            }
            try {
                const decoded = await jsonwebtoken_1.default.verify(token, process.env.SECRET);
                const knex = await db_1.default;
                const userRow = await knex('users').where('id', decoded.userId).select();
                if (!userRow) {
                    return res
                        .status(400)
                        .send({ message: 'The token you provided is invalid' });
                }
                // If the user does exist in the DB, we create a new object property in the req object.
                req.user = { id: decoded.userId };
                // Since this method is a middleware, we used next() in moving to the next request handler. If
                // any error occurred in here, we return an error message back to the user without having to move
                // move to the next request handler.
                next();
            }
            catch (err) {
                return res.status(400).send(err);
            }
        };
    }
}
exports.default = new Auth();
