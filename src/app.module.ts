import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, IronmanService } from './app.service';
import { IronManController } from './/app.controller';
import { IronManSuitController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, IronManController, IronManSuitController],
  providers: [AppService, IronmanService],
})
export class AppModule {}
