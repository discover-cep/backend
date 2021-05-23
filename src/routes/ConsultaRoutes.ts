import express from 'express';
import cepValidation from '../validations/cepValidation';

import ConsultaController from '../controllers/ConsultaController';

const ConsultaRoutes = express.Router();

ConsultaRoutes.get('/:cep', cepValidation, ConsultaController.Consulta);

export default ConsultaRoutes;
