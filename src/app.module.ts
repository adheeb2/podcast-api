import { Module } from '@nestjs/common';
import {
  AppController,
  HeroController,
  WeaponControll,
  WeaponController,
  WeaponSearch,
} from './app.controller';
import { AppService, IronmanService, WeaponService } from './app.service';
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
    WeaponControll,
  ],
  providers: [AppService, IronmanService, WeaponService],
})
export class AppModule {}
