import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { getRandomHackathonName, getRandomCountry, getDate, getRandomUserAccount } from './utils';
import { findAllHackathons, insertHackathon } from '../../models/hackathon';
import { insertHackathonRanking } from '../../models/hackathonRanking';
import { insertUserAccount } from '../../models/userAccount';
import { HackathonInterface } from '../../types';

@Injectable()
export class HackathonService {
  async findAll(): Promise<HackathonInterface[]> {
    const response: HackathonInterface[] = await findAllHackathons();
    return response;
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async createNewHackathon() {
    const newHackathon: { name: string; place: string; date: string } = {
      name: '',
      place: '',
      date: '',
    };
    newHackathon.name = await getRandomHackathonName();
    newHackathon.place = await getRandomCountry();
    newHackathon.date = getDate();
    const hackathonId = await insertHackathon({ ...newHackathon });
    for (let i = 1; i <= 10; i++) {
      const newUserAccount = await getRandomUserAccount();
      const userAccountId = await insertUserAccount({
        username: newUserAccount.login.username,
        firstName: newUserAccount.name.first,
        lastName: newUserAccount.name.last,
        country: newUserAccount.location.country,
        profilePicture: newUserAccount.picture.large,
      });
      await insertHackathonRanking({ userAccountId, hackathonId, ranking: i });
    }
  }
}
