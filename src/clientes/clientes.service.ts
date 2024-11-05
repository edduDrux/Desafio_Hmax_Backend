import { Injectable } from '@nestjs/common';
import { PrismaClient, Cliente } from '@prisma/client';

@Injectable()
export class ClientesService {
  private prisma = new PrismaClient();

  async create(data: Omit<Cliente, 'id'>) {
    return this.prisma.cliente.create({ data });
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: string) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }
}