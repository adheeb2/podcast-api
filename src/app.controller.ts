import { Controller, Get } from '@nestjs/common';
import { AppService, IronmanService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('ironman') //we are writing the 'ironman'inside controller because that is the base url path(eg:http://localhost:3000/ironman)
export class IronManController {
  @Get() //Those that will be wrote inside this paranthesis will be individual url path
  getStatus(): string {
    return `Ironman is online`;
  }
}
@Controller()
export class IronManSuitController {
  constructor(private readonly IronManService: IronmanService) {}
  @Get('suit')
  getSuit(): string {
    return this.IronManService.getStatus();
  }
}
