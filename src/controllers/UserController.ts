// Import Service
import userService from '../services/userService';

class UserController {
	/**
	 * Create A User
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} UserController object
	 */
	createUser = async (req: any, res: any) => {
		try {
			const userData = req.body;
			return res.status(201).json(await userService.createUser(userData));
		} catch (err) {
			console.error(err);
		}
	};
}

module.exports = new UserController();
