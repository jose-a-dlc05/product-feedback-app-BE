"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Service
const userService_1 = __importDefault(require("../services/userService"));
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
                const userData = req.body;
                return res.status(201).json(await userService_1.default.createUser(userData));
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
module.exports = new UserController();
