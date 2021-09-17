// Import Service
import userService from '../services/UserService';
import Helper from '../controllers/Helper';

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
			const user_id = await userService.createUser(userData);
			const token = Helper.generateToken(user_id);
			return res.status(201).send({ token });
		} catch (err) {
			console.error(err);
		}
	};
}

module.exports = new UserController();
