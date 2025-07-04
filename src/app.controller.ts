import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { AppService, IronmanService } from './app.service';
import { CreateHeroDto } from './create-hero.dto';
import { UploadService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

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
  createHero(@Body() body: CreateHeroDto) {
    return `Created hero with name ${body.name} and power ${body.power}`;
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
// Query Param
@Controller()
export class WeaponSearch {
  @Get('search')
  searchWeapons(@Query() query: { type: string; limit: number }) {
    return `Searching type ${query.type} with limit ${query.limit}`;
  }
}
// @Controller('weapon')
// export class WeaponControll {
//   constructor(private readonly weaponservice: WeaponService) {}
//   @Get(':name')
//   getWeapons(@Param('name') name: string) {
//     return this.weaponservice.getWeaponParam('name');
//   }
// }
@Controller('uploads')
export class FileUploads {
  constructor(private readonly uploadService: UploadService) {}
  @Post('single')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
  async uploadSingle(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.handleSingleFile(file);
  }
}
