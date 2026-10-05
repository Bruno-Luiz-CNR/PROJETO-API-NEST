import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { ProdService } from './prod.service.js';
import { ProdRepository } from './prod.repository.js';

describe('ProdService', () => {
  let service: ProdService;
  let repository: ProdRepository;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [
          ProdService,
          {
            provide: ProdRepository,
            useValue: {
              buscarTodosProdutos: vi.fn(),
              buscarPorId: vi.fn(),
              criarProduto: vi.fn(),
              atualizarProduto: vi.fn(),
              deletarProduto: vi.fn(),
            },
          },
        ],
      }).compile();

    service = module.get<ProdService>(ProdService);
    repository = module.get<ProdRepository>(ProdRepository);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });
});