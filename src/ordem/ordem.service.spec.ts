import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { OrdemService } from './ordem.service.js';
import { OrdemRepository } from './ordem.repository.js';

describe('OrdemService', () => {
  let service: OrdemService;
  let repository: OrdemRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdemService,
        {
          provide: OrdemRepository,
          useValue: {
            buscarTodos: vi.fn(),
            buscarPorId: vi.fn(),
            criar: vi.fn(),
            atualizar: vi.fn(),
            deletar: vi.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<OrdemService>(OrdemService);
    repository = module.get<OrdemRepository>(OrdemRepository);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });
});