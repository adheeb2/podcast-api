import { Module } from '@nestjs/common';
import {
  AppController,
  FileUploads,
  HeroController,
  WeaponController,
  WeaponSearch,
} from './app.controller';
import {
  AppService,
  IronmanService,
  LoggerService,
  UploadService,
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
    FileUploads,
  ],
  providers: [
    AppService,
    IronmanService,
    WeaponService,
    LoggerService,
    UploadService,
  ],
})
export class AppModule {}
