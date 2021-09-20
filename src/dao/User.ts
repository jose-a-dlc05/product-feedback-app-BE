//import db
import { v4 as uuidv4 } from 'uuid';
import db from '../config/db/db';
import Helper from '../controllers/Helper';

class UserDAO {
	async createUser(
		user: string,
		hashPassword: string,
		firstName: string,
		lastName: string
	) {
		const knex: any = await db;
		return await knex('users')
			.insert({
				id: uuidv4(),
				first_name: firstName,
				last_name: lastName,
				username: user,
				password: hashPassword,
			})
			.returning('id');
	}

	async loginUser(user: string, password: string) {
		const knex: any = await db;
		const loggedUser = await knex('users').where('username', user).select();
		if (loggedUser[0].username !== user) {
			throw new Error('The user login you provided is incorrect');
		}
		if (!Helper.comparePassword(loggedUser[0].password, password)) {
			throw new Error('The password you provided is incorrect');
		}
		return loggedUser[0];
	}
}

export default new UserDAO();
