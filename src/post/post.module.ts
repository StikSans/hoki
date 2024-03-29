import { forwardRef, Module } from '@nestjs/common'
import { PostService } from './post.service'
import { PostController } from './post.controller'
import { Post } from './post.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from 'src/user/user.model'
import { Img } from 'src/img/img.model'
import { ImgModule } from 'src/img/img.module'
import { AuthModule } from 'src/auth/auth.module'
import { Likes } from './likes.model'
import { Coment } from '../coment/coment.model'

@Module({
  imports: [
    SequelizeModule.forFeature([User, Post, Img, Likes, Coment]),
    ImgModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
