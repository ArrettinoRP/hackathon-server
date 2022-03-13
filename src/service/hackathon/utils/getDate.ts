import * as dayjs from 'dayjs';

export const getDate = () => {
  const date = dayjs().format('YYYY-MM-DD  HH:mm:ss');
  return date;
};
