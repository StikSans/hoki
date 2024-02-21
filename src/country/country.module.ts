import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Country} from "./country.model";
import {User} from "../user/user.model";

@Module({
  imports:[
      SequelizeModule.forFeature([Country, User])
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
