import { Injectable } from '@nestjs/common';
import { hrtime } from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
@Injectable()
export class IronmanService {
  getStatus(): string {
    return `The suit is ready`;
  }
}
