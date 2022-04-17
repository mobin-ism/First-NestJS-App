import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGurd } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGurd } from './jwt-auth.guard';

@Controller()
export class AuthController {

    constructor(private authservice : AuthService) {}
    @UseGuards(LocalAuthGurd)
    @Post('login')
    login(@Request() req) : any {
        return this.authservice.login(req.user);
    }

    @UseGuards(JwtAuthGurd)
    @Get('/dashboard')
    dashboard(@Request() req) : any {
        return `Welcome to ${req.user.name}'s Dashboard `;
    }
}
