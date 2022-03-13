import { client } from '../../database';

interface insertHackathonRankingProps {
  hackathonId: string;
  userAccountId: string;
  ranking: number;
}

export const insertHackathonRanking = async ({
  hackathonId,
  userAccountId,
  ranking,
}: insertHackathonRankingProps) => {
  const query = `INSERT INTO hackathon_ranking(hackathon_id, user_account_id, ranking) VALUES (${hackathonId}, ${userAccountId}, ${ranking});`;
  console.log(query);
  await client.query(query);
};
