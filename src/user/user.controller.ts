import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getUser() {
    return this.userService.getAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: { user: { id: number } }) {
    return this.userService.userById(req.user.id)
  }

  @Get('/login')
  user(@Body() dto: CreateUserDto) {
    return this.userService.findOne(dto.login)
  }

  @Get('/:id')
  getOneUser(@Param('id') id: number) {
    return this.userService.userById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  @UseInterceptors(FileInterceptor('avatar'))
  update(
    @Body() dto: CreateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
    @Req() req: { user: { id: number } },
  ) {
    return this.userService.updateUser(dto, avatar, req.user.id)
  }

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  createUser(
    @Body() dto: CreateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.userService.create(dto, avatar)
  }
}
