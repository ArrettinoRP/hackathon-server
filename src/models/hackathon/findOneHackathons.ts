import { client } from '../../database';

export const findOneHackathons = async (id: string) => {
  const query = `SELECT * FROM hackathon WHERE id=${id}`;
  console.log(query);
  const response = await client.query(query);
  return response.rows;
};
