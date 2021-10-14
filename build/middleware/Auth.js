var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import '../lib/env';
import AuthService from '../services/AuthService';
class Auth {
    constructor() {
        /**
         * Verify Token
         * @param {object} req
         * @param {object} res
         * @param {object} next
         * @returns {object|void} response object
         */
        this.verifyToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            // The req.headers['x-access-token'] gets the token from the request header and sends it to
            // jwt.verify along with the secret we used to sign the token.
            // If the token is valid, we retrieve the userId from the token payload and query the DB to make sure
            // the user exists in the DB.
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(400).send({ message: 'Token is not provided' });
            }
            try {
                const decoded = yield jwt.verify(token, process.env.SECRET);
                const userRow = yield AuthService.verifyToken(decoded.userId);
                if (!userRow) {
                    return res
                        .status(400)
                        .send({ message: 'The token you provided is invalid' });
                }
                // If the user does exist in the DB, we create a new object property in the req object.
                req.user = { id: userRow };
                // Since this method is a middleware, we used next() in moving to the next request handler. If
                // any error occurred in here, we return an error message back to the user without having to move
                // move to the next request handler.
                next();
            }
            catch (err) {
                return res.status(400).send(err);
            }
        });
    }
}
export default new Auth();
