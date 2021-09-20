// Import DAO
import userDAO from '../dao/User';
import Helper from '../controllers/Helper';

class UserService {
	/**
	 * Create A User
	 * @param {object} data
	 * @returns {object} UserService object
	 */
	createUser = async (data: object) => {
		try {
			const { user, password, firstName, lastName }: any = data;
			const hashPassword = Helper.hashPassword(password);
			return await userDAO.createUser(user, hashPassword, firstName, lastName);
		} catch (err: any) {
			throw new Error(err.message);
		}
	};
	/**
	 * Login
	 * @param {object} data
	 * @returns {object} UserService object
	 */
	loginUser = async (data: object) => {
		try {
			const { user, password }: any = data;
			return await userDAO.loginUser(user, password);
		} catch (err: any) {
			throw new Error(err.message);
		}
	};
}

export default new UserService();
