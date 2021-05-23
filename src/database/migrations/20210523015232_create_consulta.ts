import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Consulta', (table) => {
    table.string('cep').primary();
    table.uuid('endereco_id').notNullable().references('id').inTable('Endereco')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Consulta');
}
