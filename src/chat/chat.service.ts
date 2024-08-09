import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Chat } from './chat.model'
import { Message } from './message.model'
import { User } from '../user/user.model'

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat)
    private readonly ChatRepository: typeof Chat,
    @InjectModel(Message)
    private readonly MessageRepository: typeof Message,
  ) {}

  async findAll() {
    return await this.ChatRepository.findAll({
      include: [
        Message,
        { model: User, as: 'user' },
        {
          model: User,
          as: 'participant',
        },
      ],
    })
  }

  async create(chatDto: string, userId: number, participantId: number) {
    return await this.ChatRepository.create({
      ownerId: userId,
      title: chatDto,
      participantId,
    })
  }

  async addMessage(userId: number, chatId: number, messageDto: string) {
    return await this.MessageRepository.create(
      {
        userId,
        chatId,
        text: messageDto,
      },
      {
        include: [{ model: User }],
      },
    )
  }
}
