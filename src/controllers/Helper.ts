import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import '../lib/env';

interface tokenGenerator {
	(
		payload: string | object | Buffer,
		secretOrPrivateKey: jwt.Secret,
		options?: jwt.SignOptions | undefined
	): string;
}

const Helper = {
	/**
	 * Hash Password Method
	 * @param {string} password
	 * @returns {string} returns hashed password
	 */
	hashPassword(password: string) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
	},
	/**
	 * comparePassword
	 * @param {string} hashPassword
	 * @param {string} password
	 * @returns {Boolean} return True or False
	 */
	comparePassword(hashPassword: string, password: string) {
		return bcrypt.compareSync(password, hashPassword);
	},
	/**
	 * Gnerate Token
	 * @param {string} id
	 * @returns {string} token
	 */
	generateToken(id: string) {
		const token: tokenGenerator = jwt.sign(
			{
				userId: id,
			},
			process.env.SECRET,
			{ expiresIn: '7d' }
		);
		return token;
	},
};

export default Helper;
