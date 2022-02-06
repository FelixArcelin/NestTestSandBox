import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class BandService {
  constructor(private httpService : HttpService) {}

  async find(band) {
    // Find one or many band(s)
    let res : Response;
    const result = await this.httpService.axiosRef({
      url: band,
      method:'GET',
    })

    result.data.pipe(res)

    return new Promise((resolve, reject) => {
      res.on('finish', resolve)
      res.on('error', reject)
    })
  }

  async create(band) {
    // Check if the upcoming band is not registered
    const bandExists = await this.find(band)
    if(!bandExists) {
      throw new Error('band does not exists')
    }
    // if not registered then we can create a new record
    await this.httpService.post('',{band})
    // if already registered then send a error
    return ' band is created'
  }

  update() {
    // update aband record
    return;
  }

  delete() {
    // remove a band based on its id
    return;
  }
}
