import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'; // Importar JwtModule
import { PrismaModule } from '../prisma/prisma.module'; // Verifique se o caminho está correto

@Module({
  imports: [
    PrismaModule, 
    JwtModule.register({
      secret: 'JWT_SECRET', 
      signOptions: { expiresIn: '60s' }, 
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
