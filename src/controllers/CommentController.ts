class CommentController {
	/**
	 * Create Comment
	 * @params {object} req
	 * @params {object} res
	 * @returns {object} CommentController object
	 */
	createComment = async (req: any, res: any) => {
		try {
			if (!req.body.comment) {
				return res.status(400).send({ message: 'There is no value' });
			}
			const { comment } = req.body;
			console.log(comment, req.user.id);
			return res.status(201).send({ message: 'success' });
		} catch (err) {
			return res.status(400).send(err);
		}
	};
}

module.exports = new CommentController();
