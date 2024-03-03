import pg from 'pg';
import env from '../env.js';

const pool = pg.Pool;

const dbConfig = new pool({
  user: env.DATABASE_USER,
  port: env.DATABASE_PORT,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
});

export default dbConfig;
