# Loja API

Este é um projeto de API para gerenciamento de uma loja, implementado com [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/) e [MongoDB](https://www.mongodb.com/). A API permite que um gerente adicione, edite e remova produtos, enquanto clientes podem visualizar o catálogo. O sistema também possui autenticação JWT com controle de acesso baseado em roles (`GERENTE` e `CLIENTE`).

## Funcionalidades

- **Autenticação JWT**: Login de usuários com geração de token JWT.
- **Controle de Acesso**: Uso de roles para restringir endpoints apenas para gerentes.
- **CRUD de Produtos**: Operações de criação, leitura, atualização e exclusão de produtos.
- **Paginação e Busca**: Listagem de produtos com suporte a paginação e filtro por termo de busca.

## Tecnologias Utilizadas

- **NestJS**: Framework para desenvolvimento de aplicações Node.js escaláveis.
- **Prisma ORM**: ORM usado para acessar e gerenciar o banco de dados MongoDB.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de dados.
- **JWT**: JSON Web Token para autenticação segura.

## Estrutura dos Endpoints

### Autenticação

- `POST /auth/login` - Autenticar gerente ou cliente (login).
- `POST /auth/register/gerente` - Registrar um novo gerente.
- `POST /auth/register/cliente` - Registrar um novo cliente.

### Clientes

- `GET /cliente` - Listar todos os clientes.
- `GET /cliente/:id` - Obter um cliente específico pelo ID.
- `POST /cliente` - Criar um novo cliente.
- `PUT /cliente/:id` - Atualizar um cliente específico pelo ID.
- `DELETE /cliente/:id` - Excluir um cliente específico pelo ID.

### Gerentes

- `GET /gerente` - Listar todos os gerentes.
- `GET /gerente/:id` - Obter um gerente específico pelo ID.
- `POST /gerente` - Criar um novo gerente.
- `PUT /gerente/:id` - Atualizar um gerente específico pelo ID.
- `DELETE /gerente/:id` - Excluir um gerente específico pelo ID.

### Produtos

- `GET /produto` - Listar todos os produtos.
- `GET /produto/:id` - Obter um produto específico pelo ID.
- `POST /produto` - Criar um novo produto. (somente `GERENTE`).
- `PUT /produto/:id` - Atualizar um produto específico pelo ID. (somente `GERENTE`).
- `DELETE /produto/:id` - Excluir um produto específico pelo ID. (somente `GERENTE`).


## Melhoria e Manutenção

Embora a API esteja funcional, algumas melhorias e ajustes podem ser feitos para torná-la mais robusta e eficiente:

### 1. Validação e Segurança

- **Validação de Dados**: Adicionar validações mais detalhadas com `class-validator` para garantir que dados inválidos sejam bloqueados antes de serem persistidos.
- **Hashing de Senha**: Garantir que o hashing de senha esteja adequado ao padrão de segurança, como o uso de `bcrypt` com um `salt` adequado.

### 2. Testes Automatizados

- **Cobertura de Testes**: Aumentar a cobertura de testes unitários com `Jest` para todos os serviços e controllers. Incluir testes de integração para validar o funcionamento da API de ponta a ponta.
- **Testes para Autenticação**: Testar o comportamento de endpoints protegidos para verificar a autorização baseada em roles (`CLIENTE` vs `GERENTE`).

### 3. Otimização de Performance

- **Indexação no MongoDB**: Adicionar índices nos campos frequentemente usados em buscas e filtros, como `descricao` dos produtos.
- **Paginação Eficiente**: Avaliar o uso de paginação baseada em cursores no MongoDB para melhorar a performance de listagem com muitos registros.

### 4. Melhorias na Documentação e Swagger

- **Documentação de Erros**: Adicionar respostas de erro no Swagger para documentar os possíveis erros, como `401 Unauthorized` e `403 Forbidden`.
- **Exemplos Detalhados**: Incluir exemplos detalhados de requisições e respostas no Swagger para ajudar na integração com o frontend.

### 5. Recursos Adicionais

- **Sistema de Logs**: Implementar logs detalhados para monitorar e diagnosticar problemas em produção.
- **Controle de Acesso Avançado**: Introduzir um sistema mais flexível de permissões que permita a criação de diferentes tipos de usuários e permissões específicas.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

