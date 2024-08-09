import { forwardRef, Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user.model'
import { Role } from '../role/role.model'
import { Country } from '../country/country.model'
import { Post } from 'src/post/post.model'
import { FileModule } from 'src/file/file.module'
import { AuthModule } from 'src/auth/auth.module'
import { Likes } from '../post/likes.model'
import { Message } from '../chat/message.model'
import { Chat } from '../chat/chat.model'

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Role,
      Country,
      Post,
      Likes,
      Chat,
      Message,
    ]),
    FileModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
