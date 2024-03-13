import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from '../user/dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string) {
    const user = await this.userService.findOne(login)

    if (user) {
      if (await bcrypt.compare(pass, user.password)) {
        return user
      }
    }
    return null
  }

  async register(regUserDto: CreateUserDto, avatar: Express.Multer.File) {
    const candidate = await this.userService.findOne(regUserDto.login)

    if (candidate) {
      throw new HttpException('пользователь существует', HttpStatus.BAD_REQUEST)
    }
    const user = await this.userService.create(regUserDto, avatar)

    return this.generateToken({ login: user.login, id: user.id })
  }

  async login(user: any) {
    const payload = { login: user.login, id: user.id }
    return this.generateToken(payload)
  }

  private async generateToken(payload: object) {
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
