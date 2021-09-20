import CommentService from '../services/CommentService';

class CommentController {
	/**
	 * Create Comment
	 * @params {object} req
	 * @params {object} res
	 * @returns {object} CommentController object
	 */
	createComment = async (req: any, res: any) => {
		try {
			if (!req.body.comment || !req.params.id || !req.user.id) {
				return res.status(400).send({ message: 'There is no value' });
			}
			const { content } = req.body;
			const commentCreated = await CommentService.createComment(
				content,
				req.user.id,
				req.params.id
			);
			return res.status(201).json(commentCreated);
		} catch (err) {
			return res.status(400).send(err);
		}
	};
}

module.exports = new CommentController();
