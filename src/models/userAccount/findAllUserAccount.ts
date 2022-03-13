import { client } from '../../database';

export const findAllUserAccount = async () => {
  const query = 'SELECT * FROM user_account';
  console.log(query);
  const response = await client.query(query);
  return response.rows;
};
