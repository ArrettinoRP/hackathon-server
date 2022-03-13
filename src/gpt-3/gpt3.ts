import { Configuration, OpenAIApi } from 'openai';
import 'dotenv/config';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const GPT3 = new OpenAIApi(configuration);
