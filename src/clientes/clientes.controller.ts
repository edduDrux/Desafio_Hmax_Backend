import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from '@prisma/client';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() data: Omit<Cliente, 'id'>) {
    return this.clientesService.create(data);
  }

  @Get()
  async findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientesService.findOne(id);
  }
}