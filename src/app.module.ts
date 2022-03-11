import { Module } from '@nestjs/common';
import { HackathonController } from './controller';
import { HackathonService } from './service/hackathon';

@Module({
  imports: [],
  controllers: [HackathonController],
  providers: [HackathonService],
})
export class AppModule {}
