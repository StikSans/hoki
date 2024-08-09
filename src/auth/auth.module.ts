import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtSecret } from './constants'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'

@Module({
  controllers: [AuthController],
  providers: [LocalStrategy, AuthService, JwtStrategy],
  imports: [
    forwardRef(() => UserModule),

    PassportModule,
    JwtModule.register({
      secret: JwtSecret.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}