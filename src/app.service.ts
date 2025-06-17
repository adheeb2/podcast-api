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

// function identity(value: string): string {
//   return value;
// }
// // Generic type parameter
// function identiti<T>(value: T): T {
//   return value;
// }

// const person = {
//   name: 'adheeb',
//   sayHello: function () {
//     console.log('hi my name is ' + this.name);
//   },
// };

// class Gadget {
//   constructor(
//     public name: string,
//     public powerLevel: number,
//   ) {}
//   activate(): void {
//     console.log(`activate ${this.name} with power level ${this.powerLevel}`);
//   }
// }
// const arcReactor = new Gadget('arc reactor', 9000);
// arcReactor.activate();

// class SuperGadget extends Gadget {
//   constructor(
//     name: string,
//     powerLevel: number,
//     public effect: string,
//   ) {
//     super(name, powerLevel);
//   }
//   enhancedActivate() {
//     return `${this.name} with power level ${this.powerLevel} and effect: ${this.effect}!`;
//   }
// }
// const invisibilityCloak = new SuperGadget(
//   'invisibility cloak',
//   8000,
//   'stealth mode',
// );
// console.log(invisibilityCloak.enhancedActivate());

// function LogClass(constructor: Function): void {
//   console.log(`class created:${constructor.name}`);
// }
// @LogClass
// class IronMan {}
