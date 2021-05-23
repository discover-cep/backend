import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Endereco', (table) => {
    table.uuid('id').primary();
    table.string('logradouro').notNullable();
    table.string('complemento');
    table.string('bairro').notNullable();
    table.string('localidade').notNullable();
    table.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Endereco');
}
