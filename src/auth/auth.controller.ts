import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthDto } from './auth.dto.js';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() dados: AuthDto) {
    try {
      return await this.authService.login(dados);
    } catch (error) {
      throw new Error('Erro ao processar o login', { cause: error });
    }
  }
}