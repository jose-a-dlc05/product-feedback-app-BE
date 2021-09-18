// Import Service
import userService from '../services/UserService';
import Helper from '../controllers/Helper';
import UserService from '../services/UserService';

class UserController {
	/**
	 * Create A User
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} UserController object
	 */
	createUser = async (req: any, res: any) => {
		try {
			if (!req.body.user || !req.body.password) {
				return res.status(400).send({ message: 'Some values are missing' });
			}
			const userData = req.body;
			const userId = await userService.createUser(userData);
			const token = Helper.generateToken(userId);
			return res.status(201).send({ token });
		} catch (err) {
			console.error(err);
		}
	};
	/**
	 * Login
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} user object
	 */
	loginUser = async (req: any, res: any) => {
		try {
			if (!req.body.user || !req.body.password) {
				return res.status(400).send({ message: 'Some values are missing' });
			}
			const userData = req.body;
			const user = await UserService.loginUser(userData);
			const {
				user_id: userId,
				first_name: firstName,
				last_name: lastName,
				username,
				password,
				created_at: createdAt,
				updated_at: updatedAt,
			}: any = user;
			const token = Helper.generateToken(userId);
			return res.status(201).send({ token });
		} catch (err) {
			console.error(err);
		}
	};
}

module.exports = new UserController();
