import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
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

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('product_feedback');
}
