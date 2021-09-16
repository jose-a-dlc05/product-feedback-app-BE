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
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).raw(`
    CREATE OR REPLACE FUNCTION update_timestamp_column()
    RETURNS TRIGGER AS $$
    BEGIN
     NEW."updated_at"=now(); 
     RETURN NEW;
    END;
    $$ language 'plpgsql';
  `).raw(`
    CREATE TRIGGER update_timestamp_column BEFORE UPDATE
    ON users FOR EACH ROW EXECUTE PROCEDURE 
    update_timestamp_column();
  `);
};
exports.down = async function (knex) {
    return knex.schema.dropTable('users');
};
