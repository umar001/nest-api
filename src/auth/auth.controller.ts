import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto, RegisterAuthDto } from './dto ';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() dto: RegisterAuthDto) {
        return this.authService.register(dto);
    }
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: LoginAuthDto) {
        return this.authService.login(dto);
    }
}
