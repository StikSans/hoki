import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtAuthWSGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()

    // console.log(req.handshake.headers['authorization'])
    try {
      const authHeader = req.handshake.headers['authorization']
      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          massage: 'Пользователь не зарегестрирован',
        })
      }

      req.user = this.jwtService.verify(token)
      return true
    } catch (e) {
      throw new UnauthorizedException({
        massage: 'Пользователь не зарегестрирован',
      })
    }
  }
}
