import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('Endereco').insert([
    {
      id: 'caabd616-bf66-4c3c-b507-ebe6df8bbe15',
      logradouro: 'Rua João Nogueira Santos',
      bairro: 'Nogueirinha',
      localidade: 'Itaúna',
      uf: 'MG',
    },
    {
      id: '95e0942d-6f09-40af-b2fc-40990eb4e62a',
      logradouro: 'Rua Sabiá',
      complemento: 'até 289/290',
      bairro: 'Jóquei Clube',
      localidade: 'Fortaleza',
      uf: 'CE',
    },
  ]);
}
