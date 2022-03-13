import { client } from '../../database';
import { findAllUserAccount } from './findAllUserAccount';

interface insertUserAccountProps {
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  profilePicture: string;
}

export const insertUserAccount = async ({
  username,
  firstName,
  lastName,
  country,
  profilePicture,
}: insertUserAccountProps) => {
  const query = `
    INSERT INTO 
        user_account(username, first_name, last_name, country, profile_picture) 
    VALUES 
        ('${username}', '${firstName}', '${lastName}', '${country}', '${profilePicture}');`;
  console.log(query);
  await client.query(query);
  const response = await findAllUserAccount();
  return response[response.length - 1].id;
};
