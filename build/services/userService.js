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
        this.createUser = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password, firstName, lastName } = data;
                const hashPassword = Helper_1.default.hashPassword(password);
                return yield User_1.default.createUser(user, hashPassword, firstName, lastName);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
        /**
         * Login
         * @param {object} data
         * @returns {object} UserService object
         */
        this.loginUser = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password } = data;
                return yield User_1.default.loginUser(user, password);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.default = new UserService();
