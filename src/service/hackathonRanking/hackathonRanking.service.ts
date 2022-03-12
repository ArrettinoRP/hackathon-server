import { Injectable } from '@nestjs/common';
import { findByHackathonIdHackathonRanking } from '../../models/hackathonRanking';

@Injectable()
export class HackathonRankingService {
  async findByHackathonId(hackathonId: string): Promise<any[]> {
    const response = await findByHackathonIdHackathonRanking(hackathonId);
    return response;
  }
}
