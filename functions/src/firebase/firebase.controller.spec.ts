import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseController } from './firebase.controller';
import { FirebaseService } from './firebase.service';

describe('FirebaseController', () => {
  let controller: FirebaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FirebaseService,
          useValue: {},
        },
      ],
      controllers: [FirebaseController],
    }).compile();

    controller = module.get<FirebaseController>(FirebaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
