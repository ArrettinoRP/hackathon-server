import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { HackathonRankingService } from '../service/hackathonRanking';
import { Response } from 'express';

@Controller('hackathon-ranking')
export class HackathonRankingController {
  constructor(private readonly hackathonRankingService: HackathonRankingService) {}

  @Get('developers-ranking')
  async getDevelopersRanking(@Res() res: Response) {
    try {
      const response = await this.hackathonRankingService.getDevelopersRanking();
      res.status(HttpStatus.OK).send(response);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'internal server error' });
    }
  }

  @Get('hackathon/:hackathonId')
  async findOne(@Param('hackathonId') hackathonId: string, @Res() res: Response) {
    try {
      const response = await this.hackathonRankingService.findByHackathonId(hackathonId);
      res.status(HttpStatus.OK).send(response);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'internal server error' });
    }
  }
}
