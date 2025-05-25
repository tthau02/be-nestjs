import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {
    const uri = this.config.get('MONGO_URI');
    console.log('Mongo URI:', uri);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
