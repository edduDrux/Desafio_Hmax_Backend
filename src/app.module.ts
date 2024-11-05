import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GerentesModule } from './gerentes/gerentes.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    GerentesModule,
    ClientesModule,
    ProdutosModule,
    PrismaModule, 
  ],
})
export class AppModule {}
