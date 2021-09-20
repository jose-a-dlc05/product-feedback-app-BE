import AuthDAO from '../dao/Auth';

class AuthService {
	verifyToken = async (userId: any) => {
		try {
			const userRow = await AuthDAO.getUserId(userId);
			return userRow;
		} catch (err) {
			console.error(err);
		}
	};
}

export default new AuthService();
