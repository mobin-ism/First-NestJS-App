import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from './auth.service';

@Injectable()
export class JwtSrategy extends PassportStrategy(Strategy){

    constructor (private authService : AuthService){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : 'SECRET_KEY' // SHOULD BE KEPT INSIDE THE ENVIRONMENT VARIABLE
        });
    }

    async validate(payload : any) {
        
        return {
            id : payload.id,
            name : payload.name
        };
    }
}