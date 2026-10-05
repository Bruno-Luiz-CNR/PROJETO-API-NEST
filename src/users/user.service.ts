import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository.js';
import { UpdateUserDto } from './dto/user.dto.js';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async buscarPorIdUsuario(id: string) {
    return this.userRepository.buscarPorId(id);
  }
  async atualizarUsuario(id: string, usuarioAtualizado: UpdateUserDto) {
    const usuarioExistente = await this.userRepository.buscarPorId(id);
    if (!usuarioExistente) {
      throw new Error('Usuário não encontrado');
    }
    return this.userRepository.atualizar(id, usuarioAtualizado);
  }
  async criarUsuario(novoUsuario: UpdateUserDto) {
    const criandoUser = await this.userRepository.criarUsuario(novoUsuario);
    if (!criandoUser) {
      throw new Error('Erro ao criar usuário');
    }
    return criandoUser;
  }
  async buscarTodosUsuarios() {
    return this.userRepository.buscarTodosUsuarios();
  }
}