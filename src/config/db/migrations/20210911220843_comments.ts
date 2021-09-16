import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
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

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('comments');
}
