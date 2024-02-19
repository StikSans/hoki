import { Module } from '@nestjs/common';
import { CountriyService } from './countriy.service';
import { CountriyController } from './countriy.controller';

@Module({
  controllers: [CountriyController],
  providers: [CountriyService],
})
export class CountriyModule {}
