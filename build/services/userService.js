var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import DAO
import userDAO from '../dao/User';
import Helper from '../controllers/Helper';
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
                const hashPassword = Helper.hashPassword(password);
                return yield userDAO.createUser(user, hashPassword, firstName, lastName);
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
                return yield userDAO.loginUser(user, password);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
export default new UserService();
