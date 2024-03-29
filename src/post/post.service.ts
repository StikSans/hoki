import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Post } from './post.model'
import { CreatePostDto } from './dto/create-post.dto'
import { ImgService } from 'src/img/img.service'
import { Likes } from './likes.model'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    @InjectModel(Likes) private likesRepository: typeof Likes,
    private imgService: ImgService,
  ) {}

  async createPost(
    dtoPost: CreatePostDto,
    img: Array<Express.Multer.File>,
    id: number,
  ) {
    const post = await this.postRepository.create({ ...dtoPost, user_id: id })
    if (!img) {
      return post
    }
    for (const el of img) {
      await this.imgService.createImg({ post_id: post.id, img: el }, el)
    }
    return post
  }

  async getById(id: number) {
    return await this.postRepository.findOne({ where: { id } })
  }

  async findAllById(user_id: number) {
    return await this.postRepository.findAll({
      where: { user_id },
      order: [['id', 'DESC']],
      include: [{ all: true }],
    })
  }

  async getPost() {
    return await this.postRepository.findAll({
      order: [['id', 'DESC']],
      include: [{ all: true }],
    })
  }

  async like(userId: number, postId: number) {
    const [foundLike, created] = await this.likesRepository.findOrCreate({
      where: {
        user_id: userId,
        post_id: postId,
      },
      defaults: {
        post_id: postId,
        user_id: userId,
      },
    })

    if (created) {
      return foundLike
    }

    await foundLike.destroy()
    return 'Удален'
  }
}
