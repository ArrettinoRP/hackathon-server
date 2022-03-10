import 'dotenv/config';
import { Client } from 'pg';

console.log(process.env.DATABASE_URL);

export const client = new Client({
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});
