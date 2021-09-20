import CommentDAO from '../dao/Comment';

class CommentService {
	createComment = async (
		comment: string,
		userId: string,
		feedbackId: string
	) => {
		try {
			return await CommentDAO.createComment(comment, userId, feedbackId);
		} catch (err) {
			console.error(err);
		}
	};
}

export default new CommentService();
