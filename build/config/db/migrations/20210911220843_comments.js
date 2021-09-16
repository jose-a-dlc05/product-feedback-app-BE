"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id').primary();
        table.string('content', 500);
        table
            .string('product_request_id')
            .references('product_feedback_id')
            .inTable('product_feedback')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
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
