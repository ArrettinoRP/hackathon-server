import { client } from '../../database';

export const findByHackathonIdHackathonRanking = async (hackathonId: string) => {
  const query = `
    SELECT 
      hackathon_ranking.*, user_account.*
    FROM 
      hackathon_ranking 
    INNER JOIN 
      user_account 
    ON 
      hackathon_ranking.user_account_id = user_account.id 
    WHERE 
      hackathon_id = ${hackathonId}`;
  console.log(query);
  const response = await client.query(query);
  return response.rows;
};
