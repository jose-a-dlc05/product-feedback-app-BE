"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = async function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.string('username', 50);
        table.string('password', 20).notNullable();
        table.string('img_url', 255);
        table.timestamps(true, true);
    });
};
exports.down = async function (knex) {
    return knex.schema.dropTable('users');
};
