import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Verifica se o usuário é um gerente
    let user = await this.prisma.gerente.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.senha))) {
      return { ...user, role: 'gerente' }; 
    }

    // Verifica se o usuário é um cliente
    user = await this.prisma.cliente.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.senha))) {
      return { ...user, role: 'cliente' }; 
    }

    return null;
  }

  async login(user: { email: string; password: string }) {
    const validatedUser = await this.validateUser(user.email, user.password);
    if (!validatedUser) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const payload = { email: validatedUser.email, role: validatedUser.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
