import { Injectable } from '@nestjs/common';
import {
  findByHackathonIdHackathonRanking,
  findAllHackathonRanking,
} from '../../models/hackathonRanking';
import { getUserPoints } from './utils';

@Injectable()
export class HackathonRankingService {
  async findByHackathonId(hackathonId: string): Promise<any[]> {
    const response = await findByHackathonIdHackathonRanking(hackathonId);
    return response;
  }

  async getDevelopersRanking(): Promise<any[]> {
    const response = await findAllHackathonRanking();
    const ranking = [];
    for (const data of response) {
      ranking[data.user_account_id] = ranking[data.user_account_id]
        ? {
            ...ranking[data.user_account_id],
            points: ranking[data.user_account_id].points + getUserPoints(data.ranking),
          }
        : {
            user_account_id: data.user_account_id,
            username: data.username,
            profile_picture: data.profile_picture,
            points: getUserPoints(data.ranking),
          };
    }
    return ranking;
  }
}
