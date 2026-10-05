import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Bruno',
    description: 'Nome do usuário',
  })
  @IsNotEmpty({
    message: 'O nome é obrigatório.',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'bruno@email.com',
    description: 'E-mail do usuário',
  })
  @IsEmail(
    {},
    {
      message: 'O e-mail informado é inválido.',
    },
  )
  @IsNotEmpty({
    message: 'O e-mail é obrigatório.',
  })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha do usuário',
  })
  @IsNotEmpty({
    message: 'A senha é obrigatória.',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  senha: string;
}
export class UpdateUserDto {

  @ApiPropertyOptional({
    example: 'Bruno',
    description: 'Nome do usuário',
  })
  @IsOptional()
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  @IsString()
  nome?: string;

  @ApiPropertyOptional({
    example: 'bruno@nest.com',
    description: 'E-mail do usuário',
  })
  @IsOptional()
  @IsEmail({}, {
    message: 'O e-mail informado é inválido.',
  })
  email?: string;

  @ApiPropertyOptional({
    example: '123456',
    description: 'Senha do usuário',
  })
  @IsOptional()
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  senha?: string;
}