import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

import {User} from "./user/user.model";
import { RoleModule } from './role/role.module';
import {Role} from "./role/role.model";
import { CountryModule } from './country/country.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {Country} from "./country/country.model";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      SequelizeModule.forRoot({
          dialect: 'mysql',
          host: 'localhost',
          username: 'root',
          password: 'root',
          port: 3306,
          database: 'hoki',
          models: [Role, User, Country],
          autoLoadModels: true,
          synchronize: true,
          logging: false
      }),
      UserModule,
      RoleModule,
      CountryModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
