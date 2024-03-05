import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private localStrategy: LocalStrategy,
    private jwtStrategy: JwtStrategy,
  ) {}

  @Post('login')
  async login(@Body() userDto: CreateUserDto) {
    const user = await this.localStrategy.validate(
      userDto.login,
      userDto.password,
    )
    return await this.authService.login(user)
  }

  @Post('registration')
  async reg(@Body() regUserDto: CreateUserDto) {
    return this.authService.register(regUserDto)
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // async profile() {
  //   return await this.jwtStrategy.validate()
  // }
}
