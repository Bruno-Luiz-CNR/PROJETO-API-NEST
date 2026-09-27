import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/user.dto.js';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // GET /users
  @Get()
  @ApiOperation({
    summary: 'Buscar todos os usuários',
    description: 'Retorna todos os usuários cadastrados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuários encontrados com sucesso.',
    schema: {
      example: [
        {
          id: 1,
          nome: 'Bruno',
          email: 'bruno@email.com',
        },
        {
          id: 2,
          nome: 'João',
          email: 'joao@email.com',
        },
      ],
    },
  })
  async buscarTodosUsuarios() {
    return await this.userService.buscarTodosUsuarios();
  }

  // GET /users/:id
  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário por ID',
    description: 'Retorna um usuário específico pelo seu ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso.',
    schema: {
      example: {
        id: 1,
        nome: 'Bruno',
        email: 'bruno@email.com',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Usuário não encontrado',
        error: 'Not Found',
      },
    },
  })
  async buscarPorId(
    @Param('id') id: string,
  ) {
    return await this.userService.buscarPorIdUsuario(id);
  }

  // POST /users
  @Post()
  @ApiOperation({
    summary: 'Criar usuário',
    description: 'Cadastra um novo usuário.',
  })
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso.',
    schema: {
      example: {
        id: 3,
        nome: 'Carlos',
        email: 'carlos@email.com',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos.',
    schema: {
      example: {
        statusCode: 400,
        message: [
          'O nome é obrigatório.',
          'O e-mail informado é inválido.',
          'A senha deve ter no mínimo 6 caracteres.',
        ],
        error: 'Bad Request',
      },
    },
  })
  async criarUsuarios(
    @Body() novoUsuario: CreateUserDto,
  ) {
    return await this.userService.criarUsuario(
      novoUsuario,
    );
  }

  // PUT /users/:id
  @Put(':id')
  @ApiOperation({
    summary: 'Atualizar usuário',
    description: 'Atualiza os dados de um usuário existente.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
    example: 1,
  })
  @ApiBody({
    schema: {
      example: {
        nome: 'Bruno Luiz',
        email: 'brunoluiz@email.com',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso.',
    schema: {
      example: {
        id: 1,
        nome: 'Bruno Luiz',
        email: 'brunoluiz@email.com',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos.',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Usuário não encontrado',
        error: 'Not Found',
      },
    },
  })
  async atualizarUsuario(
    @Param('id') id: string,
    @Body() usuarioAtualizado: any,
  ) {
    return await this.userService.atualizarUsuario(
      id,
      usuarioAtualizado,
    );
  }
}