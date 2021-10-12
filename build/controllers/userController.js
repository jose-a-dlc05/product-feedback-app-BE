'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
// Import Service
const UserService_1 = __importDefault(require('../services/UserService'));
const Helper_1 = __importDefault(require('./Helper'));
const UserService_2 = __importDefault(require('../services/UserService'));
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
				const userId = await UserService_1.default.createUser(userData);
				const token = Helper_1.default.generateToken(userId[0]);
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
		this.loginUser = async (req, res) => {
			try {
				if (!req.body.user || !req.body.password) {
					return res.status(400).send({ message: 'Some values are missing' });
				}
				const userData = req.body;
				const user = await UserService_2.default.loginUser(userData);
				const {
					id: userId,
					first_name: firstName,
					last_name: lastName,
					username,
					password,
					created_at: createdAt,
					updated_at: updatedAt,
				} = user;
				const token = Helper_1.default.generateToken(userId);
				return res.status(201).send({ token });
			} catch (err) {
				return res.status(401).send(err.message);
			}
		};
	}
}
module.exports = new UserController();
