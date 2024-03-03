import express from 'express';
import cors from 'cors';
import allRoutes from './src/modules/index.js';

const app = express();

app.use(express.json());

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
