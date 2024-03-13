import { Module } from '@nestjs/common';
import { ImgService } from './img.service';
import { ImgController } from './img.controller';
import { Img } from './img.model';
import { Post } from 'src/post/post.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([Img, Post]), FileModule],
  controllers: [ImgController],
  providers: [ImgService],
  exports: [ImgService]
})
export class ImgModule {}
