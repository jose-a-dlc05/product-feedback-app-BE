//import db
import { v4 as uuidv4 } from 'uuid';
import db from '../config/db/db';

class UserDAO {
	async createUser(
		user: string,
		hashPassword: string,
		firstName: string,
		lastName: string
	) {
		const knex: any = await db;
		return await knex('users').insert({
			user_id: uuidv4(),
			first_name: firstName,
			last_name: lastName,
			username: user,
			password: hashPassword,
		});
	}
}

export default new UserDAO();
