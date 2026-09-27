import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CriarProdutoDto {
  @ApiProperty({
    example: 'Notebook',
    description: 'Nome do produto',
  })
  @IsNotEmpty({
    message: 'O nome do produto é obrigatório.',
  })
  @IsString({
    message: 'O nome deve ser um texto.',
  })
  nome: string;

  @ApiProperty({
    example: 3500,
    description: 'Preço do produto',
  })
  @IsNotEmpty({
    message: 'O preço é obrigatório.',
  })
  @IsNumber(
    {},
    {
      message: 'O preço deve ser um número válido.',
    },
  )
  @IsPositive({
    message: 'O preço deve ser maior que zero.',
  })
  preco: number;

  @ApiPropertyOptional({
    example: 'Notebook para trabalho e estudos',
    description: 'Descrição do produto',
  })
  @IsOptional()
  @IsString({
    message: 'A descrição deve ser um texto.',
  })
  descricao?: string;

  @ApiProperty({
    example: 'Eletrônicos',
    description: 'Categoria do produto',
  })
  @IsNotEmpty({
    message: 'A categoria é obrigatória.',
  })
  @IsString({
    message: 'A categoria deve ser um texto.',
  })
  categoria: string;

  @ApiProperty({
    example: 10,
    description: 'Quantidade disponível em estoque',
  })
  @IsNotEmpty({
    message: 'A quantidade é obrigatória.',
  })
  @IsInt({
    message: 'A quantidade deve ser um número inteiro.',
  })
  @IsPositive({
    message: 'A quantidade deve ser maior que zero.',
  })
  estoque: number;
}

export class AtualizarProdutoDto {
  @ApiPropertyOptional({
    example: 'Notebook Gamer',
    description: 'Novo nome do produto',
  })
  @IsOptional()
  @IsString({
    message: 'O nome deve ser um texto.',
  })
  nome?: string;

  @ApiPropertyOptional({
    example: 4200,
    description: 'Novo preço do produto',
  })
  @IsOptional()
  @IsNumber(
    {},
    {
      message: 'O preço deve ser um número válido.',
    },
  )
  @IsPositive({
    message: 'O preço deve ser maior que zero.',
  })
  preco?: number;

  @ApiPropertyOptional({
    example: 15,
    description: 'Nova quantidade disponível em estoque',
  })
  @IsOptional()
  @IsInt({
    message: 'O estoque deve ser um número inteiro.',
  })
  @IsPositive({
    message: 'O estoque deve ser maior que zero.',
  })
  estoque?: number;
}

export class DeleteProdutoDto {
  @ApiProperty({
    example: 'Produto removido por solicitação do cliente',
    description: 'Motivo da exclusão do produto',
  })
  @IsNotEmpty({
    message: 'A observação é obrigatória.',
  })
  @IsString({
    message: 'A observação deve ser um texto.',
  })
  @MinLength(10, {
    message: 'A observação deve ter no mínimo 10 caracteres.',
  })
  observacao: string;
}