import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common'
import { ChatService } from './chat.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.chatService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: { user: { id: number } },
    @Body('title') createDto: string,
    @Body('participantId') participantId: number,
  ) {
    return this.chatService.create(createDto, req.user.id, participantId)
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/message')
  async addMessage(
    @Req() req: { user: { id: number } },
    @Param('id') chatId: number,
    @Body() messageDto: string,
  ) {
    return this.chatService.addMessage(req.user.id, chatId, messageDto)
  }
}
