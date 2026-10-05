import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { readFile } from 'fs/promises';
import { join } from 'path';

import { AuthDto } from './auth.dto.js';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async login(dados: AuthDto) {

    const usuario = await this.validarUsuario(
      dados.email,
      dados.senha,
    );

    if (!usuario) {
      return {
        message: 'E-mail ou senha inválidos',
      };
    }

    const payload = {
      sub: usuario.id,
      email: usuario.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }

  async validarUsuario(email: string, senha: string) {

    const caminho = join(process.cwd(), 'src', 'database', 'users.json');

    const arquivo = await readFile(caminho, 'utf-8');

    const dados = JSON.parse(arquivo);

    const usuario = dados.users.find(
    (usuario: any) =>
        usuario.email === email &&
        usuario.senha === senha,
    );

    return usuario;
  }
}