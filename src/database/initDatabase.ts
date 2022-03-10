import { client } from './client';

export const initDatabase = async () => {
  try {
    await client.connect();
    console.log('DB is connected');
  } catch (err) {
    console.log('DB connection error');
    process.exit(1);
  }
};
