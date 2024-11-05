import { Injectable } from '@nestjs/common';
import { PrismaClient, Produto } from '@prisma/client';

@Injectable()
export class ProdutosService {
  private prisma = new PrismaClient();

  async create(data: Omit<Produto, 'id'>) {
    return this.prisma.produto.create({ data });
  }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: string) {
    return this.prisma.produto.findUnique({ where: { id } });
  }
}