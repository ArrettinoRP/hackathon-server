import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { HackathonService } from '../service/hackathon';
import { Response } from 'express';

@Controller('hackathon')
export class HackathonController {
  constructor(private readonly hackathonService: HackathonService) {}
  @Get()
  async findAll(@Res() res: Response) {
    try {
      const response = await this.hackathonService.findAll();
      res.status(HttpStatus.OK).send(response);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'internal server error' });
    }
  }
  @Get('/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.hackathonService.findOne(id);
      res.status(HttpStatus.OK).send(response);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'internal server error' });
    }
  }
}
