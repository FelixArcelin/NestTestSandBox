import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandController } from './band.controller';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [HttpModule, ThrottlerModule.forRoot({ttl:60, limit:10})],
  controllers: [BandController],
  providers: [BandService],
})
export class BandModule {}
