import { client } from '../../database';

export const findAllHackathons = async () => {
  const query = 'SELECT * FROM hackathon';
  console.log(query);
  const response = await client.query(query);
  return response.rows;
};
