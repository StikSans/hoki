import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  get() {
    return this.postService.getPost()
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.postService.getById(id)
  }

  @Get('/user/:id')
  findAllById(@Param('id') id: number) {
    return this.postService.findAllById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  create(
    @Body() createDto: CreatePostDto,
    @UploadedFiles() img: Array<Express.Multer.File>,
    @Req() req: { user: { id: number } },
  ) {
    return this.postService.createPost(createDto, img, req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:id/like')
  like(@Param('id') postId: number, @Req() req: { user: { id: number } }) {
    return this.postService.like(req.user.id, postId)
  }
}
