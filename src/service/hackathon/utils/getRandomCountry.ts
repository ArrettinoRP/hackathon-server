import { GPT3 } from '../../../gpt-3';

export const getRandomCountry = async () => {
  const response = await GPT3.createCompletion('text-davinci-001', {
    prompt: 'Say a random country',
  });
  const title = response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, '');
  return title;
};
