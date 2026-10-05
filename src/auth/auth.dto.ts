import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthDto {

     @ApiProperty({
        example: 'bruno@b.com',
        description: 'Email do usuário',
      })
      @IsNotEmpty({
        message: 'O email é obrigatório.',
      })
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;

    @ApiProperty({
        example: 'senha123',
        description: 'Senha do usuário',
      })
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    senha: string;
}
