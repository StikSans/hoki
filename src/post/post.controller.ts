import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Req,
  UseGuards,
} from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { log } from 'console'
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
  @Post('/img')
  @UseInterceptors(AnyFilesInterceptor())
  img(@UploadedFiles() img: Array<Express.Multer.File>) {
    console.log(img)
  }
}
