import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGurd } from './local-auth.guard';

@Controller()
export class AuthController {

    @UseGuards(LocalAuthGurd)
    @Post('login')
    login(@Request() req) : any {
        return req.user;
    }
}
