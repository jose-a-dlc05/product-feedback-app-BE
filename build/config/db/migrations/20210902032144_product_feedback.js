"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('product_feedback', (table) => {
        table.increments('product_feedback_id').primary();
        table.string('title', 100).notNullable();
        table.string('category', 50).notNullable();
        table.integer('upvotes');
        table.string('status', 50).notNullable();
        table.string('description', 255);
        table.timestamps(true, true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('product_feedback');
}
exports.down = down;
