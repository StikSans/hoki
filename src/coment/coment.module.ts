import { forwardRef, Module } from '@nestjs/common'
import { ComentService } from './coment.service'
import { ComentController } from './coment.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Coment } from './coment.model'
import { User } from '../user/user.model'
import { Post } from '../post/post.model'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    SequelizeModule.forFeature([Coment, User, Post]),
    forwardRef(() => AuthModule),
  ],
  controllers: [ComentController],
  providers: [ComentService],
})
export class ComentModule {}
