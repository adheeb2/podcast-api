import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
// Learning about Params
@Controller('heroes')
export class HeroController {
  @Get(':name')
  getHero(@Param('name') heroName: string) {
    //So @param is used to take value from the url,here(':name') and place it inside another variable,say here heroName
    return `fetching details of : ${heroName}`;
  }
  @Post()
  createHero(@Body() data: { name: string; power: string }) {
    return `Created hero ${data.name} with power ${data.power}`;
  }
}
@Controller('weapons')
export class WeaponController {
  @Post()
  createWeapon(@Body() body: { name: string; damage: number }) {
    return `Created weapon ${body.name} with damage ${body.damage}`;
  }
  @Get(':name')
  getName(@Param('name') weaponName: string) {
    return `weapon name ${weaponName}`;
  }
}
