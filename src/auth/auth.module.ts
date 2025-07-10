import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  imports: [PrismaModule],
})
export class AuthModule { }
