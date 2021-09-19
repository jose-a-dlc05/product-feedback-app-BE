"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('product_feedback', (table) => {
        table.string('id').primary().unique();
        table.string('title', 100).notNullable();
        table.string('category', 50).notNullable();
        table.integer('upvotes');
        table.string('status', 50).notNullable();
        table.string('description', 255);
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
    ON product_feedback FOR EACH ROW EXECUTE PROCEDURE 
    update_timestamp_column();
  `);
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('product_feedback');
}
exports.down = down;
