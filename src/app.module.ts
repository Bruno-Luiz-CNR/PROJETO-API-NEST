import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

import { UsersController } from './users/users.controller.js';
import { UserService } from './users/user.service.js';
import { UserRepository } from './users/user.repository.js';

import { ProdController } from './produtos/prod.controller.js';
import { ProdService } from './produtos/prod.service.js';
import { ProdRepository } from './produtos/prod.repository.js';

import { OrdemController } from './ordem/ordem.controller.js';
import { OrdemRepository } from './ordem/ordem.repository.js';
import { OrdemService } from './ordem/ordem.service.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthService } from './auth/auth.service.js';
import { AuthModule } from './auth/auth.module.js';

export const { ObserveModule, ObserveInstrument } =
  createObserveModule();

@Module({
  imports: [
      AuthModule,
  ],

  controllers: [
    UsersController,
    ProdController,
    OrdemController,
  ],

  providers: [
    UserService,
    UserRepository,
    ProdService,
    ProdRepository,
    OrdemService,
    OrdemRepository,
  ],
})
export class AppModule {}