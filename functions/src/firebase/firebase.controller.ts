import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
//import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  //constructor(private readonly firebaseService: FirebaseService) {}

  @HttpCode(HttpStatus.NO_CONTENT)
  @Get()
  async invokeWebhook(): Promise<void> {
    console.info('')
  }
}
