import { Injectable } from '@nestjs/common';
import { PrismaClient, Gerente } from '@prisma/client';

@Injectable()
export class GerentesService {
  private prisma = new PrismaClient();

  async create(data: Omit<Gerente, 'id'>) {
    return this.prisma.gerente.create({ data });
  }

  async findAll() {
    return this.prisma.gerente.findMany();
  }

  async findOne(id: string) {
    return this.prisma.gerente.findUnique({ where: { id } });
  }
}