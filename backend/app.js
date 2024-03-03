import express from 'express';
import cors from 'cors';
import allRoutes from './src/modules/index.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import YAML from 'yamljs';

const app = express();

const swaggerDoc = YAML.load('./swagger.yaml');

app.use(express.json());

app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerDoc));

app.use('/', allRoutes);

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

app.use((error, req, res, next) => res.status(error.status).json({
  status: error.status,
  message: error.message,
  data: error.data,
}));

export default app;
