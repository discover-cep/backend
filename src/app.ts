import express from 'express';
import cors from 'cors';

import consultaRoutes from './routes/ConsultaRoutes';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(corsOptions));
app.disable('x-powered-by');
app.use(express.json());
app.use('/v1/consulta', consultaRoutes);

export default app;
