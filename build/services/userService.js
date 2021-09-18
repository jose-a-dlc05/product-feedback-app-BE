"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import DAO
const User_1 = __importDefault(require("../dao/User"));
const Helper_1 = __importDefault(require("../controllers/Helper"));
class UserService {
    constructor() {
        /**
         * Create A User
         * @param {object} data
         * @returns {object} UserService object
         */
        this.createUser = async (data) => {
            try {
                const { user, password, firstName, lastName } = data;
                const hashPassword = Helper_1.default.hashPassword(password);
                return await User_1.default.createUser(user, hashPassword, firstName, lastName);
            }
            catch (err) {
                console.error(err);
            }
        };
        /**
         * Login
         * @param {object} data
         * @returns {object} UserService object
         */
        this.loginUser = async (data) => {
            try {
                const { user, password } = data;
                return await User_1.default.loginUser(user, password);
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new UserService();
