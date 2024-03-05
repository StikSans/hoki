import { Injectable } from '@nestjs/common'
import { User } from './user.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async getAll() {
    return await this.userRepository.findAll()
  }

  async findOne(login: string) {
    return await this.userRepository.findOne({ where: { login } })
  }

  async create(createDto: CreateUserDto) {
    const newUser = {
      ...createDto,
      password: await bcrypt.hash(createDto.password, 4),
    }
    return await this.userRepository.create(newUser)
  }
}
