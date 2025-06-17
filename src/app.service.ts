import { Injectable, Param } from '@nestjs/common';
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
// @Injectable()
// export class WeaponService {
//   getWeaponParam(name: string) {
//     return `you requested the weapon:${name}`;
//   }
// }
// Logger service
@Injectable()
export class LoggerService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
@Injectable()
export class WeaponService {
  constructor(private readonly logger: LoggerService) {}
  getWeapons() {
    this.logger.log('Fetching weapons');
    return ['mjolnir'];
  }
}
