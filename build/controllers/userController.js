"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Service
const UserService_1 = __importDefault(require("../services/UserService"));
const Helper_1 = __importDefault(require("../controllers/Helper"));
class UserController {
    constructor() {
        /**
         * Create A User
         * @param {object} req
         * @param {object} res
         * @returns {object} UserController object
         */
        this.createUser = async (req, res) => {
            try {
                if (!req.body.user || !req.body.password) {
                    return res.status(400).send({ message: 'Some values are missing' });
                }
                const userData = req.body;
                const user_id = await UserService_1.default.createUser(userData);
                const token = Helper_1.default.generateToken(user_id);
                return res.status(201).send({ token });
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
module.exports = new UserController();
