"use strict";
class CommentController {
    constructor() {
        /**
         * Create Comment
         * @params {object} req
         * @params {object} res
         * @returns {object} CommentController object
         */
        this.createComment = async (req, res) => {
            try {
                if (!req.body.comment) {
                    return res.status(400).send({ message: 'There is no value' });
                }
                const { comment } = req.body;
                console.log(comment, req.user.id, req.params.id);
                return res.status(201).send({ message: 'success' });
            }
            catch (err) {
                return res.status(400).send(err);
            }
        };
    }
}
module.exports = new CommentController();
