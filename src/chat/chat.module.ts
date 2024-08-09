import { Module } from '@nestjs/common'
import { ChatService } from './chat.service'
import { ChatGateway } from './chat.gateway'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../user/user.model'
import { Chat } from './chat.model'
import { Message } from './message.model'
import { ChatController } from './chat.controller'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [SequelizeModule.forFeature([User, Chat, Message]), AuthModule],
  providers: [ChatGateway, ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
