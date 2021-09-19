import db from '../config/db/db';

class AuthDAO {
	getUserId = async (userId: any) => {
		try {
			const knex = await db;
			const user = await knex('users').where('id', userId).select();
			return user[0].id;
		} catch (err) {
			console.error(err);
		}
	};
}

export default new AuthDAO();
