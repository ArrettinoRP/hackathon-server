import { Injectable } from '@nestjs/common';
import { findAllHackathons } from '../../models/hackathon';
import { HackathonInterface } from '../../types';

@Injectable()
export class HackathonService {
  async findAll(): Promise<HackathonInterface[]> {
    const response: HackathonInterface[] = await findAllHackathons();
    return response;
  }
}
