import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Post } from './post.model'
import { CreatePostDto } from './dto/create-post.dto'
import { User } from '../user/user.model'
import { ImgService } from 'src/img/img.service'
import { Img } from 'src/img/img.model'
import { log } from 'console'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private imgService: ImgService,
  ) {}

  async createPost(dtoPost: CreatePostDto, img: Array<Express.Multer.File>, id: number) {
    const post = await this.postRepository.create({...dtoPost, user_id: id})
    if (!img){
      return post
    }
    for(const el of img) {
      await this.imgService.createImg({post_id: post.id, img: el}, el)
    }
    return post
  }

  async getById(id: number) {
    return await this.postRepository.findOne({ where: { id } })
  }

  async getPost() {
    return await this.postRepository.findAll({
      order: [['id', 'DESC']],
      include: [User, Img],
    })
  }
}
