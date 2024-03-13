import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Req,
} from '@nestjs/common'
import {Request} from 'express'
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
  profile(@Req() req: {user: {id:number}}) {
    return this.userService.userById(req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getOneUser(@Param('id') id: number) {
    return this.userService.userById(id)
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
