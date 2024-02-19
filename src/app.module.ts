import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { UserModule } from './user/user.module';
import {User} from "./user/user.model";
import { CountriyModule } from './countriy/countriy.module';
import { RoleModule } from './role/role.module';
import {Role} from "./role/role.model";

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'hoki',
        models: [User, Role],
          autoLoadModels: true,
          synchronize: true
      }),
      UserModule,
      CountriyModule,
      RoleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
