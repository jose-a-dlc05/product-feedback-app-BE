"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = __importDefault(require("../dao/Auth"));
class AuthService {
    constructor() {
        this.verifyToken = async (userId) => {
            try {
                const userRow = await Auth_1.default.getUserId(userId);
                return userRow;
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new AuthService();
