import { Controller, Get } from '@nestjs/common';


@Controller()
export class AlbumController {

  @Get()
  getHello(): string {
    return 'hello';
  }
}
