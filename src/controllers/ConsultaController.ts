import { v4 } from 'uuid';
import type { Request, Response, RequestHandler } from 'express';
import knex from '../database/connection';

interface Controller {
  Consulta: RequestHandler;
}

interface Addr {
  cep: string;
  id?: string;
  endereco_id?: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const boatController:Controller = {
  async Consulta(req, res) {
    try {
      const { cep } = req.params;
      const data:Addr[] = await knex('Consulta').where('cep', cep).innerJoin(
        'Endereco',
        'Consulta.endereco_id',
        '=',
        'Endereco.id',
      );
      delete data[0].endereco_id;
      delete data[0].id;
      return res.json(data[0]);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: 'Unexpected error while listing boats',
      });
    }
  },
};

export default boatController;
