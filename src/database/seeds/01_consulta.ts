import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('Consulta').insert([
    { cep: '35680250', endereco_id: 'caabd616-bf66-4c3c-b507-ebe6df8bbe15' },
    { cep: '60520045', endereco_id: '95e0942d-6f09-40af-b2fc-40990eb4e62a' },
  ]);
}
