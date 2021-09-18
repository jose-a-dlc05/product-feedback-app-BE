import jwt from 'jsonwebtoken';
import db from '../config/db/db';

class Auth {
	/**
	 * Verify Token
	 * @param {object} req
	 * @param {object} res
	 * @param {object} next
	 * @returns {object|void} response object
	 */
	verifyToken = async (req: any, res: any, next: any) => {
		// The req.headers['x-access-token'] gets the token from the request header and sends it to
		// jwt.verify along with the secret we used to sign the token.
		// If the token is valid, we retrieve the userId from the token payload and query the DB to make sure
		// the user exists in the DB.

		const token = req.headers['x-access-token'];
		if (!token) {
			return res.status(400).send({ message: 'Token is not provided' });
		}
		try {
			const decoded = await jwt.verify(token, process.env.SECRET);
			const knex = await db;
			const userRow = await knex('users').where('user_id', decoded.userId);
			if (!userRow) {
				return res
					.status(400)
					.send({ message: 'The token you provided is invalid' });
			}
			// If the user does exist in the DB, we create a new object property in the req object.
			req.user = { id: decoded.userId };
			// Since this method is a middleware, we used next() in moving to the next request handler. If
			// any error occurred in here, we return an error message back to the user without having to move
			// move to the next request handler.
			next();
		} catch (err) {
			return res.status(400).send(err);
		}
	};
}

export default new Auth();
