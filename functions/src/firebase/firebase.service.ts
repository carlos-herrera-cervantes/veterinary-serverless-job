import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private readonly app: admin.app.App;

  constructor(private readonly configService: ConfigService) {
    const emptyApps = !admin.apps.length;

    if (emptyApps) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
          privateKey: this.configService.get<string>('FIREBASE_PRIVATE_KEY'),
          clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        }),
        databaseURL: this.configService.get<string>('FIREBASE_HOST'),
      }, 'Synchronizer');
    }

    this.app = admin.apps[0]
  }

  /**
   * Returns a list of nodes
   * @param {String} path Path to extract the nodes
   * @returns Array of objects
   */
  async getChildsAsync(path: string, limit: number = 10): Promise<admin.database.DataSnapshot> {
    return new Promise((resolve, reject) => {
      this.app.database().ref(path)
      .orderByKey()
      .limitToFirst(limit)
      .once('value', snapshot => resolve(snapshot));
    });
  }

  /**
   * Deletes a group of nodes
   * @param {String} path Path to delete the nodes
   */
  deleteBatchAsync(path: string, keys: string[]): void {
    keys.forEach(async (key: string) => await this.app.database().ref(path).child(key).remove());
  }
}
