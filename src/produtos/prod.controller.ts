import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ProdService } from './prod.service.js';

import {
  CriarProdutoDto,
  AtualizarProdutoDto,
  DeleteProdutoDto,
} from './dto/produto.dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdController {
  constructor(
    private readonly prodService: ProdService,
  ) {}

  // GET /produtos
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Buscar todos os produtos',
    description: 'Retorna todos os produtos cadastrados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Produtos encontrados com sucesso.',
    schema: {
      example: [
        {
          id: 1,
          nome: 'Notebook',
          preco: 3500,
          descricao: 'Notebook para trabalho e estudos',
          categoria: 'Eletrônicos',
          estoque: 10,
        },
        {
          id: 2,
          nome: 'Mouse',
          preco: 120,
          descricao: 'Mouse sem fio',
          categoria: 'Periféricos',
          estoque: 25,
        },
      ],
    },
  })
  async buscarTodosProdutos() {
    return await this.prodService.buscarTodosProdutos();
  }

  // GET /produtos/:id
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Buscar produto por ID',
    description: 'Retorna um produto específico pelo seu ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do produto',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado com sucesso.',
    schema: {
      example: {
        id: 1,
        nome: 'Notebook',
        preco: 3500,
        descricao: 'Notebook para trabalho e estudos',
        categoria: 'Eletrônicos',
        estoque: 10,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Produto não encontrado',
        error: 'Not Found',
      },
    },
  })
  async buscarPorId(
    @Param('id') id: string,
  ) {
    return await this.prodService.buscarPorIdProduto(id);
  }

  // POST /produtos
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Cadastrar produto',
    description: 'Cria um novo produto.',
  })
  @ApiBody({
    type: CriarProdutoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Produto criado com sucesso.',
    schema: {
      example: {
        id: 4,
        nome: 'Monitor',
        preco: 1200,
        descricao: 'Monitor Full HD',
        categoria: 'Eletrônicos',
        estoque: 8,
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
          'O nome do produto é obrigatório.',
          'O preço deve ser maior que zero.',
        ],
        error: 'Bad Request',
      },
    },
  })
  async criarProduto(
    @Body() novoProduto: CriarProdutoDto,
  ) {
    return await this.prodService.criarProduto(
      novoProduto,
    );
  }

  // PUT /produtos/:id
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Atualizar produto',
    description: 'Atualiza os dados de um produto existente.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do produto',
    example: 1,
  })
  @ApiBody({
    type: AtualizarProdutoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso.',
    schema: {
      example: {
        id: 1,
        nome: 'Notebook Gamer',
        preco: 4200,
        descricao: 'Notebook para trabalho e estudos',
        categoria: 'Eletrônicos',
        estoque: 15,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos.',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Produto não encontrado',
        error: 'Not Found',
      },
    },
  })
  async atualizarProduto(
    @Param('id') id: string,
    @Body() produtoAtualizado: AtualizarProdutoDto,
  ) {
    return await this.prodService.atualizarProduto(
      id,
      produtoAtualizado,
    );
  }

  // DELETE /produtos/:id
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Excluir produto',
    description:
      'Exclui um produto e registra o motivo da exclusão.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do produto',
    example: 1,
  })
  @ApiBody({
    type: DeleteProdutoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto excluído com sucesso.',
    schema: {
      example: {
        message: 'Produto deletado com sucesso',
        produto: {
          id: 1,
          nome: 'Notebook',
          preco: 3500,
          descricao: 'Notebook para trabalho e estudos',
          categoria: 'Eletrônicos',
          estoque: 10,
          observacao:
            'Produto removido por solicitação do cliente',
          dataDelecao: '2026-09-27T14:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Observação ausente ou inválida.',
    schema: {
      example: {
        statusCode: 400,
        message: [
          'A observação é obrigatória.',
        ],
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
    schema: {
      example: {
        statusCode: 404,
        message: 'Produto não encontrado',
        error: 'Not Found',
      },
    },
  })
  async deletarProduto(
    @Param('id') id: string,
    @Body() deleteProdutoDto: DeleteProdutoDto,
  ) {
    return await this.prodService.deletarProduto(
      id,
      deleteProdutoDto,
    );
  }
}