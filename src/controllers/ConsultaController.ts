import { v4 } from 'uuid';
import type { RequestHandler } from 'express';
import getCep from '../services/getCep';
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
      const data:Addr[]|undefined = await knex('Consulta').innerJoin(
        'Endereco',
        'Consulta.endereco_id',
        '=',
        'Endereco.id',
      ).where('cep', cep);
      if (data.length > 0) {
        delete data[0].endereco_id;
        delete data[0].id;
        return res.json(data[0]);
      }
      const addr = await getCep(cep);
      if (addr) {
        delete addr.siafi;
        delete addr.ibge;
        delete addr.ddd;
        delete addr.gia;
        const trx = await knex.transaction();
        try {
          const id = v4();
          await trx('Endereco').insert({
            id,
            logradouro: addr.logradouro,
            complemento: addr.complemento,
            bairro: addr.bairro,
            localidade: addr.localidade,
            uf: addr.uf,
          });
          await trx('Consulta').insert({
            cep,
            endereco_id: id,
          });
          await trx.commit();
          return res.json(addr);
        } catch (error) {
          console.log(error);
          await trx.rollback();
          return res.json(addr);
        }
      }
      return res.status(400).json({
        error: 'Cep not found',
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        error: 'Unexpected error getting cep',
      });
    }
  },
};

export default boatController;
