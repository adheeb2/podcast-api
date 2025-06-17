import { Module } from '@nestjs/common';
import {
  AppController,
  HeroController,
  WeaponController,
  WeaponSearch,
} from './app.controller';
import {
  AppService,
  IronmanService,
  LoggerService,
  WeaponService,
} from './app.service';
import { IronManController } from './/app.controller';
import { IronManSuitController } from './app.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    IronManController,
    IronManSuitController,
    HeroController,
    WeaponController,
    WeaponSearch,
  ],
  providers: [AppService, IronmanService, WeaponService, LoggerService],
})
export class AppModule {}
