import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from '@prisma/client';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() data: Omit<Produto, 'id'>) {
    return this.produtosService.create(data);
  }

  @Get()
  async findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }
}