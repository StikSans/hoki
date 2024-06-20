import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'

import { User } from './user/user.model'
import { RoleModule } from './role/role.module'
import { Role } from './role/role.model'
import { CountryModule } from './country/country.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { Country } from './country/country.model'
import { AuthModule } from './auth/auth.module'
import { PostModule } from './post/post.module'
import { Post } from './post/post.model'
import { FileModule } from './file/file.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { ImgModule } from './img/img.module'
import { Img } from './img/img.model'
import { Likes } from './post/likes.model'
import { ComentModule } from './coment/coment.module'
import { Coment } from './coment/coment.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'root',
      port: 8889,
      database: 'sync',
      models: [Role, User, Country, Post, Img, Likes, Coment],
      autoLoadModels: true,
      synchronize: true,
      // logging: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src', 'public'),
    }),
    UserModule,
    RoleModule,
    CountryModule,
    AuthModule,
    PostModule,
    FileModule,
    ImgModule,
    ComentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
