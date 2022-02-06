import { Body, Controller, Get, Post } from '@nestjs/common';
import { BandService } from './band.service';
import { CreateBand } from './DTO/createBand.dto';
import { FindBand } from './DTO/findBand.dto';
import { Response } from 'express';

@Controller()
export class BandController {
 constructor(private readonly BandService: BandService) {}



  @Get('band')
  getBand(@Body() band: FindBand) {
    return this.BandService.find(band)
  }

  @Post('band')
  createBand(@Body() band: CreateBand) {
    return band;
  }

  updateBand() {
    return;
  }

  removeBand() {
    return;
  }
}
