import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { UserService } from './users/user.service.js';
import { UsersController } from './users/users.controller.js';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UserService,
          useValue: {
            buscarTodosUsuarios: vi.fn(),
            buscarPorIdUsuario: vi.fn(),
            criarUsuario: vi.fn(),
            atualizarUsuario: vi.fn(),
            deletarUsuario: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });
});