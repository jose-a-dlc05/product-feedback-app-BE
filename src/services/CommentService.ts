import CommentDAO from '../dao/Comment';

class CommentService {
	createComment = async (
		content: string,
		userId: string,
		feedbackId: string
	) => {
		try {
			return await CommentDAO.createComment(content, userId, feedbackId);
		} catch (err) {
			console.error(err);
		}
	};
}

export default new CommentService();
