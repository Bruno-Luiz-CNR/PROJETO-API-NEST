import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { UserService } from './user.service.js';
import { UserRepository } from './user.repository.js';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [
          UserService,
          {
            provide: UserRepository,
            useValue: {
              buscarTodosUsuarios: vi.fn(),
              buscarPorId: vi.fn(),
              atualizar: vi.fn(),
              criarUsuario: vi.fn(),
            },
          },
        ],
      }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar todos os usuários', async () => {
    const usuarios = [
      {
        id: 1,
        nome: 'Bruno',
        email: 'bruno@nest.com',
        senha: '123456',
      },
      {
        id: 2,
        nome: 'João',
        email: 'joao@nest.com',
        senha: '123456',
      },
    ];

    vi.spyOn(repository, 'buscarTodosUsuarios')
      .mockResolvedValue(usuarios);

    const resultado =
      await service.buscarTodosUsuarios();

    expect(resultado).toEqual(usuarios);
  });

  it('deve buscar um usuário pelo ID', async () => {
    const usuario = {
      id: 2,
      nome: 'João',
      email: 'joao@nest.com',
      senha: '123456',
    };

    vi.spyOn(repository, 'buscarPorId')
      .mockResolvedValue(usuario);

    const resultado =
      await service.buscarPorIdUsuario('2');

    expect(resultado).toEqual(usuario);

    expect(repository.buscarPorId)
      .toHaveBeenCalledWith('2');
  });

  it('deve atualizar um usuário', async () => {
    const usuarioExistente = {
      id: 2,
      nome: 'João',
      email: 'joao@nest.com',
      senha: '123456',
    };

    const usuarioAtualizado = {
      nome: 'BrunoUpdate',
      email: 'bruno@nest.com',
      senha: '123456',
    };

    vi.spyOn(repository, 'buscarPorId')
      .mockResolvedValue(usuarioExistente);

    vi.spyOn(repository, 'atualizar')
      .mockResolvedValue({
        id: 2,
        ...usuarioAtualizado,
      });

    const resultado =
      await service.atualizarUsuario(
        '2',
        usuarioAtualizado,
      );

    expect(resultado).toEqual({
      id: 2,
      ...usuarioAtualizado,
    });

    expect(repository.atualizar)
      .toHaveBeenCalledWith(
        '2',
        usuarioAtualizado,
      );
  });

  it('deve lançar erro quando o usuário não existir', async () => {
    vi.spyOn(repository, 'buscarPorId')
      .mockResolvedValue(undefined);

    await expect(
      service.atualizarUsuario('99', {
        nome: 'Teste',
        email: 'teste@teste.com',
        senha: '123456',
      }),
    ).rejects.toThrow(
      'Usuário não encontrado',
    );
  });
});