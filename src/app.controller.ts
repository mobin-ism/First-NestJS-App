import { Controller, Get, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile')
  @HttpCode(202)
  getHello(@Req() request: Request): Request {
    // return this.appService.getHello();
    return request;
  }
}
