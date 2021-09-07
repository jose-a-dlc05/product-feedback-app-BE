"use strict";
//import db
const db = require('../config/db/db');
// create a class called FeedbackDAO and create methods with queries on accessing db:
class FeedbackDAO {
    async getFeedback() {
        // getFeedback()
        const knex = await db;
        console.log(knex.default().queryBuilder());
    }
}
// createFeedback(title, category, description)
// export feedbackDAO
module.exports = new FeedbackDAO();
