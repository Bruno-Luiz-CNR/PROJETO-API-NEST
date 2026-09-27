import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './users/user.service.js';
import { UsersController } from './users/users.controller.js';

describe('AppController', () => {

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ UsersController],
      providers: [ UserService],
    }).compile();

    const appController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {;
  });
});
