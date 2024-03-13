import { ExecutionContext, Injectable } from '@nestjs/common'
import { User } from './user.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import * as bcrypt from 'bcrypt'
import { FileService } from 'src/file/file.service'

@Injectable()
export class UserService {
  jwtService: any
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private fileService: FileService,
  ) {}

  async getAll() {
    return await this.userRepository.findAll()
  }

  async findOne(login: string) {
    return await this.userRepository.findOne({ where: { login } })
  }

  async userById(id: number) {
    console.log(id)
    return await this.userRepository.findOne({ where: { id } })
  }


  async create(createDto: CreateUserDto, avatar: Express.Multer.File) {
    const fileName = await this.fileService.saveFile(avatar)
    const newUser = {
      ...createDto,
      password: await bcrypt.hash(createDto.password, 4),
      avatar: fileName,
    }
    return await this.userRepository.create(newUser)
  }
}
