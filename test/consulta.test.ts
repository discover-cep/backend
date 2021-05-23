import request from 'supertest';

import app from '../src/app';
import knex from '../src/database/connection';

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
});

afterAll(async () => {
  await knex.migrate.rollback();
  await knex.destroy();
});

test('select users', async () => {
  const response = await request(app).get('/v1/consulta/35680250');
  expect(response.body).toHaveProperty('cep');
  expect(response.body).toHaveProperty('logradouro');
  expect(response.body).toHaveProperty('complemento');
  expect(response.body).toHaveProperty('bairro');
  expect(response.body).toHaveProperty('localidade');
  expect(response.body).toHaveProperty('uf');
});
