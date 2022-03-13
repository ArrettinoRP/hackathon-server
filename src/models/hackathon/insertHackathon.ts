import { client } from '../../database';
import { findAllHackathons } from './findAllHackathons';

interface insertHackathonProps {
  name: string;
  place: string;
  date: string;
}

export const insertHackathon = async ({ name, place, date }: insertHackathonProps) => {
  const query = `INSERT INTO hackathon(hackathon_name, place, hackathon_date) VALUES ('${name}', '${place}', '${date}')`;
  console.log(query);
  await client.query(query);
  const response = await findAllHackathons();
  return response[response.length - 1].id;
};
