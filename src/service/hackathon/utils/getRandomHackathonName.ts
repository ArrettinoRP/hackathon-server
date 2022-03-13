import { GPT3 } from '../../../gpt-3';

export const getRandomHackathonName = async () => {
  const response = await GPT3.createCompletion('text-davinci-001', {
    prompt: 'Say a random title of a hackathon event',
  });
  const name = response.data.choices[0].text.replace(/(\r\n|\n|\r|')/gm, '');
  return name;
};
