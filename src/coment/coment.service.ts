import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Coment } from './coment.model'
import { CreateComentDto } from './dto/create-coment.dto'
import { User } from '../user/user.model'

@Injectable()
export class ComentService {
  constructor(@InjectModel(Coment) private comentRepository: typeof Coment) {}

  async get() {
    return await this.comentRepository.findAll({ include: [User] })
  }

  async createComent(createDto: CreateComentDto) {
    return await this.comentRepository.create(createDto)
  }
}
