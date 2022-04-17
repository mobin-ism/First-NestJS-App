import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalSrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtSrategy } from './jwt.strategy';
@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret : 'SECRET_KEY',
    signOptions : {expiresIn: '60s'},
  })],
  providers: [AuthService, LocalSrategy, JwtSrategy],
  controllers: [AuthController]
})

export class AuthModule {}
