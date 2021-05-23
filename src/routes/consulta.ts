import express from 'express';

import ConsultaController from '../controllers/ConsultaController';

const ConsultaRoutes = express.Router();

ConsultaRoutes.get('/:cep', ConsultaController.Consulta);

export default ConsultaRoutes;
