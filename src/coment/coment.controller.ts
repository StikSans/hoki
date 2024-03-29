import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { ComentService } from './coment.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateComentDto } from './dto/create-coment.dto'

@Controller('coment')
export class ComentController {
  constructor(private readonly comentService: ComentService) {}

  @Get()
  get() {
    return this.comentService.get()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateComentDto, @Req() req: { user: { id: number } }) {
    console.log({ ...dto, user_id: req.user.id })
    return this.comentService.createComent({ ...dto, user_id: req.user.id })
  }
}
