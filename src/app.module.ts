import { Module } from '@nestjs/common';
import { HackathonController, HackathonRankingController } from './controller';
import { HackathonService } from './service/hackathon';
import { HackathonRankingService } from './service/hackathonRanking';

@Module({
  imports: [],
  controllers: [HackathonController, HackathonRankingController],
  providers: [HackathonService, HackathonRankingService],
})
export class AppModule {}
