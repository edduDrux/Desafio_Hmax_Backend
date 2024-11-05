import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { Gerente } from '@prisma/client';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly gerentesService: GerentesService) {}

  @Post()
  async create(@Body() data: Omit<Gerente, 'id'>) {
    return this.gerentesService.create(data);
  }

  @Get()
  async findAll() {
    return this.gerentesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.gerentesService.findOne(id);
  }
}
