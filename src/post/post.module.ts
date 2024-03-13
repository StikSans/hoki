import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './post.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { Img } from 'src/img/img.model';
import { ImgService } from 'src/img/img.service';
import { ImgModule } from 'src/img/img.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Post, Img]), ImgModule,
    forwardRef(() => AuthModule)
],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
