import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginAuthDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}
