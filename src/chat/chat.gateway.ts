import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { ChatService } from './chat.service'
import { Server, Socket } from 'socket.io'
import { Req, UseGuards } from '@nestjs/common'
import { JwtAuthWSGuard } from '../auth/jwt-auth-ws.guard'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('joinChat')
  handleJoinChat(
    @MessageBody('chatId') chatId: number,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(`chat_${chatId}`)
    client.emit('Присоеденился к чату', chatId)
  }

  @SubscribeMessage('leaveChat')
  handleLeaveChat(
    @MessageBody('chatId') chatId: number,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(`chat_${chatId}`)
    client.emit('Вышел с чата', chatId)
  }

  @UseGuards(JwtAuthWSGuard)
  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody('chatId') chatId: number,
    @MessageBody('text') messageDto: string,
    @ConnectedSocket() client: Socket,
    @Req() req: { user: { id: number } },
  ) {
    const message = await this.chatService.addMessage(
      req.user.id,
      chatId,
      messageDto,
    )
    this.server.to(`chat_${chatId}`).emit('newMessage', message)
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log('Connected to ChatGateway')
  }
}
