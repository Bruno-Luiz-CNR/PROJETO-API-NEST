import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class DeleteOrdemDto {
  @ApiProperty({
    example: 'Cliente solicitou o cancelamento',
    description: 'Motivo da exclusão da ordem',
  })
  @IsString({ message: 'motivo deve ser uma string' })
  motivo: string;
}

export class CriarOrdemDto {
  @ApiProperty({
    example: 'Notebook',
    description: 'Nome do produto da ordem',
  })
  @IsString({ message: 'nome deve ser uma string' })
  nome: string;

  @ApiProperty({
    example: 3500,
    description: 'Preço do produto da ordem',
  })
  @IsNumber({}, { message: 'preco deve ser um número' })
  preco: number;
}