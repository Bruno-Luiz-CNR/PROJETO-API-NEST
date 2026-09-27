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
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🚀 Projeto API

API REST desenvolvida com **NestJS + TypeScript**, criada com o objetivo de praticar e consolidar conceitos fundamentais de desenvolvimento backend.

O projeto foi desenvolvido utilizando uma arquitetura em camadas, separando as responsabilidades entre **Controller, Service e Repository**, com persistência de dados inicialmente realizada através de arquivos **JSON**.

Além da implementação dos endpoints, o projeto também contempla validação de dados, tratamento de erros HTTP, documentação com Swagger e organização de uma estrutura semelhante à utilizada em aplicações backend reais.

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido como uma aplicação backend para gerenciamento de:

* 👤 Usuários
* 📦 Produtos
* 🛒 Ordens

A API permite realizar operações de criação, consulta, atualização e exclusão de registros, dependendo do recurso.

O principal objetivo não foi apenas criar endpoints, mas entender **como uma requisição percorre uma aplicação backend**:

```text
Cliente
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
JSON
```

Essa separação permite organizar melhor o código e facilita futuras evoluções, como a substituição dos arquivos JSON por um banco de dados relacional.

---

# 🛠️ Tecnologias utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **Swagger / OpenAPI**
* **class-validator**
* **class-transformer**
* **Git**
* **GitHub**
* **JSON** como persistência inicial
* **Observe** para observabilidade

---

# 🏗️ Arquitetura

O projeto utiliza uma arquitetura simples baseada na separação de responsabilidades.

## Controller

O Controller é responsável por receber as requisições HTTP e direcioná-las para o Service.

Exemplo:

```text
POST /produtos
```

O Controller recebe o JSON enviado pelo cliente e encaminha os dados para o Service.

```text
HTTP Request
      ↓
Controller
      ↓
Service
```

---

## Service

O Service concentra a lógica de negócio da aplicação.

Ele recebe os dados do Controller, executa as regras necessárias e utiliza o Repository para acessar os dados.

```text
Controller
    ↓
Service
    ↓
Repository
```

Também é no Service que são tratados alguns erros, como:

```text
Produto não encontrado
Usuário não encontrado
Ordem não encontrada
```

utilizando exceções HTTP do NestJS.

---

## Repository

O Repository é responsável pelo acesso aos dados.

Neste projeto, os dados são armazenados em arquivos JSON.

Exemplo:

```text
src/database/produtos.json
src/database/users.json
src/database/ordem.json
```

Isso permite praticar o conceito de Repository sem precisar configurar inicialmente um banco de dados.

Posteriormente, essa camada pode ser substituída por uma implementação utilizando MySQL, PostgreSQL ou outro banco de dados sem precisar alterar toda a lógica dos Controllers.

---

# 📂 Estrutura do projeto

```text
projeto-api/
│
├── src/
│   │
│   ├── database/
│   │   ├── ordem.json
│   │   ├── produtos.json
│   │   └── users.json
│   │
│   ├── ordem/
│   │   ├── dto/
│   │   │   └── ordem.dto.ts
│   │   ├── ordem.controller.ts
│   │   ├── ordem.repository.ts
│   │   └── ordem.service.ts
│   │
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── produto.dto.ts
│   │   ├── prod.controller.ts
│   │   ├── prod.repository.ts
│   │   └── prod.service.ts
│   │
│   ├── users/
│   │   ├── dto/
│   │   │   └── user.dto.ts
│   │   ├── users.controller.ts
│   │   ├── user.repository.ts
│   │   └── user.service.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│   └── app.e2e-spec.ts
│
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── oxlint.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── vitest.config.ts
├── vitest.config.e2e.ts
└── README.md
```

---

# 👤 Usuários

A API possui operações para gerenciamento de usuários.

## Endpoints

| Método | Endpoint     | Descrição                |
| ------ | ------------ | ------------------------ |
| GET    | `/users`     | Lista todos os usuários  |
| GET    | `/users/:id` | Busca um usuário pelo ID |
| POST   | `/users`     | Cria um novo usuário     |
| PUT    | `/users/:id` | Atualiza um usuário      |

### Exemplo — criação de usuário

```http
POST /users
```

```json
{
  "nome": "Bruno",
  "email": "bruno@email.com",
  "senha": "123456"
}
```

---

# 📦 Produtos

A API possui um CRUD para gerenciamento de produtos.

## Endpoints

| Método | Endpoint        | Descrição                |
| ------ | --------------- | ------------------------ |
| GET    | `/produtos`     | Lista todos os produtos  |
| GET    | `/produtos/:id` | Busca um produto pelo ID |
| POST   | `/produtos`     | Cria um produto          |
| PUT    | `/produtos/:id` | Atualiza um produto      |
| DELETE | `/produtos/:id` | Exclui um produto        |

### Exemplo — criação de produto

```http
POST /produtos
```

```json
{
  "nome": "Notebook",
  "preco": 3500,
  "descricao": "Notebook para trabalho e estudos",
  "categoria": "Eletrônicos",
  "estoque": 10
}
```

### Exemplo — atualização

```http
PUT /produtos/1
```

```json
{
  "nome": "Notebook Gamer",
  "preco": 4200,
  "estoque": 15
}
```

### Exclusão

A exclusão também recebe uma observação:

```http
DELETE /produtos/1
```

```json
{
  "observacao": "Produto removido por solicitação do cliente"
}
```

Além da remoção do produto, o projeto registra informações relacionadas à exclusão.

---

# 🛒 Ordens

O projeto também possui uma estrutura para gerenciamento de ordens.

Uma ordem relaciona:

* Usuário
* Produto
* Quantidade

## Endpoints

| Método | Endpoint     | Descrição             |
| ------ | ------------ | --------------------- |
| GET    | `/ordem`     | Lista todas as ordens |
| POST   | `/ordem`     | Cria uma ordem        |
| PUT    | `/ordem/:id` | Atualiza uma ordem    |
| DELETE | `/ordem/:id` | Exclui uma ordem      |

### Exemplo

```http
POST /ordem
```

```json
{
  "userId": 1,
  "productId": 2,
  "quantidade": 2
}
```

---

# ✅ Validação de dados

O projeto utiliza:

```text
class-validator
class-transformer
```

junto com o `ValidationPipe` global do NestJS.

A configuração permite validar os dados recebidos pelas requisições antes que eles cheguem à lógica da aplicação.

Exemplo:

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

Com isso, dados inválidos podem gerar respostas HTTP `400 Bad Request`.

---

# 📋 DTOs

Os DTOs (**Data Transfer Objects**) são utilizados para definir e validar os dados recebidos pela API.

Exemplo:

```ts
export class CriarProdutoDto {
  nome: string;
  preco: number;
  descricao?: string;
  categoria: string;
  estoque: number;
}
```

Os DTOs também foram integrados à documentação Swagger para que os campos esperados possam ser visualizados diretamente na documentação da API.

---

# 📚 Swagger

A API possui documentação utilizando **Swagger / OpenAPI**.

Depois de iniciar a aplicação, a documentação pode ser acessada em:

```text
http://localhost:3000/api
```

A documentação permite visualizar:

* Endpoints
* Métodos HTTP
* Parâmetros
* Body das requisições
* Exemplos
* Respostas
* Códigos HTTP
* Erros esperados
* Schemas dos DTOs

Também foram adicionadas descrições e exemplos aos endpoints através dos decorators do Swagger.

Exemplos utilizados:

```ts
@ApiTags()
@ApiOperation()
@ApiResponse()
@ApiParam()
@ApiBody()
@ApiProperty()
@ApiPropertyOptional()
```

---

# ⚠️ Tratamento de erros

O projeto utiliza exceções HTTP disponibilizadas pelo NestJS.

Um exemplo é:

```ts
throw new NotFoundException(
  'Produto não encontrado',
);
```

Quando um recurso não existe, a API pode retornar:

```json
{
  "statusCode": 404,
  "message": "Produto não encontrado",
  "error": "Not Found"
}
```

Também são tratados erros relacionados à validação dos dados recebidos.

---

# 🔄 Fluxo de uma requisição

Um dos principais conceitos praticados no projeto foi entender o caminho completo de uma requisição.

Por exemplo:

```text
POST /produtos
```

### 1. Cliente

O cliente envia:

```json
{
  "nome": "Notebook",
  "preco": 3500,
  "categoria": "Eletrônicos",
  "estoque": 10
}
```

### 2. Controller

O Controller recebe a requisição:

```text
ProdController
```

### 3. DTO

Os dados são validados através do:

```text
CriarProdutoDto
```

### 4. Service

O Controller chama:

```text
ProdService
```

O Service executa a lógica necessária.

### 5. Repository

O Service chama:

```text
ProdRepository
```

### 6. Persistência

O Repository lê ou altera:

```text
src/database/produtos.json
```

### 7. Resposta

O resultado volta pelo caminho inverso:

```text
JSON
 ↓
Repository
 ↓
Service
 ↓
Controller
 ↓
HTTP Response
```

---

# 🔍 Observabilidade

O projeto também possui integração com o módulo de observabilidade do Observe.

A aplicação inicializa o:

```text
ObserveModule
```

e utiliza instrumentação da aplicação NestJS.

Essa parte foi adicionada para estudar o conceito de **observabilidade de aplicações backend**, permitindo futuramente acompanhar informações relacionadas à execução da API.

As credenciais do serviço não devem ser armazenadas diretamente no código-fonte em um projeto real. O ideal é utilizar variáveis de ambiente.

---

# 🧪 Testes

O projeto possui estrutura inicial para testes utilizando o ecossistema configurado no projeto.

Arquivos relacionados:

```text
src/app.controller.spec.ts
test/app.e2e-spec.ts
vitest.config.ts
vitest.config.e2e.ts
```

A estrutura permite evoluir posteriormente para:

* Testes unitários
* Testes de Services
* Testes de Repositories
* Testes de Controllers
* Testes E2E
* Testes de integração

---

# ▶️ Como executar

## Pré-requisitos

É necessário possuir instalado:

* Node.js
* npm

## Instalação

Clone o projeto:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd projeto-api
```

Instale as dependências:

```bash
npm install
```

---

## Iniciar a aplicação

```bash
npm run start
```

A API será iniciada na porta:

```text
3000
```

Swagger:

```text
http://localhost:3000/api
```

---

# 📡 Principais comandos

Iniciar a aplicação:

```bash
npm run start
```

Modo desenvolvimento:

```bash
npm run start:dev
```

Build:

```bash
npm run build
```

Testes:

```bash
npm run test
```

Testes E2E:

```bash
npm run test:e2e
```

---

# 🧠 O que foi aprendido

Este projeto foi desenvolvido principalmente como uma experiência prática de aprendizado em backend.

Durante o desenvolvimento foram trabalhados conceitos importantes de uma API REST.

## NestJS

Foi praticada a estrutura fundamental de uma aplicação NestJS:

```text
Module
Controller
Service
Repository
DTO
```

Também foi trabalhado o conceito de **Dependency Injection**, entendendo como o NestJS encontra e injeta os Providers necessários.

---

## TypeScript

Foram praticados conceitos como:

* Classes
* Tipos
* Interfaces conceituais
* DTOs
* Tipagem de parâmetros
* Tipagem de objetos
* `async/await`
* Imports e exports
* Organização de módulos

Também foram encontrados e corrigidos problemas relacionados à tipagem e importação de classes.

---

## API REST

O projeto permitiu entender na prática os principais métodos HTTP:

```text
GET
POST
PUT
DELETE
```

E a relação deles com operações de uma API:

```text
GET    → consultar
POST   → criar
PUT    → atualizar
DELETE → excluir
```

---

## HTTP Status Codes

Foram trabalhados principalmente:

```text
200 OK
201 Created
400 Bad Request
404 Not Found
```

Além da criação de respostas de erro mais claras para o consumidor da API.

---

## Arquitetura em camadas

Um dos principais aprendizados foi entender por que não colocar toda a lógica dentro do Controller.

A responsabilidade foi dividida:

```text
Controller
Responsável pela comunicação HTTP

        ↓

Service
Responsável pela lógica da aplicação

        ↓

Repository
Responsável pelo acesso aos dados

        ↓

JSON
Persistência
```

Isso deixa o projeto mais organizado e facilita futuras alterações.

---

## Validação

Foi aprendido como validar dados recebidos pela API utilizando:

```text
class-validator
```

Exemplos de validações praticadas:

```text
IsString
IsNumber
IsInt
IsPositive
IsEmail
IsNotEmpty
MinLength
IsOptional
```

---

## Swagger

Também foi aprendido como documentar uma API utilizando OpenAPI/Swagger.

Isso permitiu transformar a API em uma documentação interativa onde os endpoints podem ser visualizados e testados.

---

## Debugging

Durante o desenvolvimento foram encontrados e resolvidos diferentes problemas, incluindo:

* Rotas incorretas
* Imports incorretos
* DTOs que não estavam sendo exportados
* Arquivos JSON apontando para caminhos incorretos
* Problemas de dependências
* Problemas de instrumentação
* Configuração do Swagger
* Erros de TypeScript
* Erros de inicialização do NestJS
* Organização dos módulos e Providers

Esses problemas fizeram parte do processo de entender como as diferentes partes do NestJS se relacionam.

---

# 🧩 Persistência utilizando JSON

Para manter o projeto simples durante o aprendizado, os dados foram armazenados em arquivos JSON.

Exemplo:

```text
src/database/
├── users.json
├── produtos.json
└── ordem.json
```

Essa abordagem não tem como objetivo substituir um banco de dados em uma aplicação de produção.

Ela foi utilizada para permitir o estudo da arquitetura:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Persistência
```

sem adicionar inicialmente a complexidade de configuração de um banco de dados.

---

# 📸 Screenshots

As imagens podem ser adicionadas posteriormente nesta seção.

## Swagger

(<img width="1906" height="1028" alt="image" src="https://github.com/user-attachments/assets/abebacc3-3fc7-465f-bfed-8973264db70f" />)

## API funcionando

(<img width="1630" height="849" alt="image" src="https://github.com/user-attachments/assets/0e8ab33f-8ab5-4abd-baf0-3591c7c94d9a" />)

---

# 🚀 Próximos passos

Algumas evoluções planejadas para o projeto:

* [ ] Criar DTO específico para atualização de usuário
* [ ] Melhorar tipagem dos Services e Repositories
* [ ] Implementar testes unitários
* [ ] Implementar testes E2E
* [ ] Adicionar banco de dados relacional
* [ ] Implementar integração com MySQL/PostgreSQL
* [ ] Utilizar ORM
* [ ] Implementar autenticação
* [ ] Implementar autorização
* [ ] Criar relacionamento real entre usuários, produtos e ordens
* [ ] Melhorar tratamento global de exceções
* [ ] Melhorar observabilidade
* [ ] Configurar variáveis de ambiente
* [ ] Criar pipeline de CI/CD
* [ ] Containerizar a aplicação com Docker

---

# 🎯 Objetivo do projeto

Mais do que simplesmente criar uma API CRUD, este projeto teve como objetivo compreender os fundamentos necessários para desenvolver aplicações backend utilizando NestJS.

A principal evolução buscada foi sair de uma implementação onde todas as responsabilidades poderiam ficar misturadas e passar a compreender uma estrutura organizada:

```text
                 API REST
                    │
                    ▼
               Controller
                    │
                    ▼
                 Service
                    │
                    ▼
               Repository
                    │
                    ▼
                Database
```

O projeto representa uma etapa prática de aprendizado em desenvolvimento backend com **NestJS, TypeScript e APIs REST**.

