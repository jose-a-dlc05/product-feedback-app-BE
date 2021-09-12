"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id');
        table.string('content', 500);
        table
            .integer('product_request_id')
            .references('product_feedback_id')
            .inTable('product_feedback');
        table.integer('user_id').references('user_id').inTable('users');
        table.string('replying_to_user');
        table.integer('replying_to_id');
        table.integer('reply_id');
        table.timestamps(true, true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('comments');
}
exports.down = down;
