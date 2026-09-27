import {
  Body,
  Controller,
  Delete,
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

import { OrdemService } from './ordem.service.js';

import {
  CriarOrdemDto,
  DeleteOrdemDto,
} from './dto/ordem.dto.js';

@ApiTags('Ordens')
@Controller('ordem')
export class OrdemController {
  constructor(
    private readonly ordemService: OrdemService,
  ) {}

  // GET /ordem
  @Get()
  @ApiOperation({
    summary: 'Buscar todas as ordens',
    description: 'Retorna todas as ordens cadastradas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Ordens encontradas com sucesso.',
    schema: {
      example: [
        {
          id: 1,
          userId: 1,
          productId: 2,
          quantidade: 2,
        },
        {
          id: 2,
          userId: 1,
          productId: 1,
          quantidade: 1,
        },
      ],
    },
  })
  async buscarTodosOrdem() {
    return await this.ordemService.buscarTodosOrdem();
  }

  // GET /ordem/:id
  @Get(':id')
  @ApiOperation({
    summary: 'Buscar ordem por ID',
    description: 'Retorna uma ordem específica pelo seu ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da ordem',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Ordem encontrada com sucesso.',
    schema: {
      example: {
        id: 1,
        userId: 1,
        productId: 2,
        quantidade: 2,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Ordem não encontrada.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Ordem não encontrada',
        error: 'Not Found',
      },
    },
  })
  async buscarPorId(
    @Param('id') id: string,
  ) {
    return await this.ordemService.buscarPorIdOrdem(id);
  }

  // POST /ordem
  @Post()
  @ApiOperation({
    summary: 'Criar ordem',
    description: 'Cria uma nova ordem.',
  })
  @ApiBody({
    type: CriarOrdemDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Ordem criada com sucesso.',
    schema: {
      example: {
        id: 3,
        userId: 1,
        productId: 2,
        quantidade: 2,
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
          'userId deve ser um número inteiro positivo.',
          'productId deve ser um número inteiro positivo.',
          'quantidade deve ser um número inteiro positivo.',
        ],
        error: 'Bad Request',
      },
    },
  })
  async criarOrdem(
    @Body() novaOrdem: CriarOrdemDto,
  ) {
    return await this.ordemService.criarOrdem(
      novaOrdem,
    );
  }

  // PUT /ordem/:id
  @Put(':id')
  @ApiOperation({
    summary: 'Atualizar ordem',
    description: 'Atualiza uma ordem existente.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da ordem',
    example: 1,
  })
  @ApiBody({
    type: CriarOrdemDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Ordem atualizada com sucesso.',
    schema: {
      example: {
        id: 1,
        userId: 1,
        productId: 2,
        quantidade: 3,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos.',
  })
  @ApiResponse({
    status: 404,
    description: 'Ordem não encontrada.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Ordem não encontrada',
        error: 'Not Found',
      },
    },
  })
  async atualizarOrdem(
    @Param('id') id: string,
    @Body() ordemAtualizada: CriarOrdemDto,
  ) {
    return await this.ordemService.atualizarOrdem(
      id,
      ordemAtualizada,
    );
  }

  // DELETE /ordem/:id
  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir ordem',
    description: 'Exclui uma ordem existente.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da ordem',
    example: 1,
  })
  @ApiBody({
    type: DeleteOrdemDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Ordem excluída com sucesso.',
    schema: {
      example: {
        message: 'Ordem deletada com sucesso',
        ordem: {
          id: 1,
          userId: 1,
          productId: 2,
          quantidade: 2,
        },
        motivo:
          'Cliente solicitou o cancelamento da ordem',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Motivo da exclusão inválido.',
  })
  @ApiResponse({
    status: 404,
    description: 'Ordem não encontrada.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Ordem não encontrada',
        error: 'Not Found',
      },
    },
  })
  async deletarOrdem(
    @Param('id') id: string,
    @Body() deleteOrdemDto: DeleteOrdemDto,
  ) {
    return await this.ordemService.deletarOrdem(
      id,
      deleteOrdemDto,
    );
  }
}