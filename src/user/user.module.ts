import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user.model'
import { Role } from '../role/role.model'
import { Country } from '../country/country.model'

@Module({
  imports: [SequelizeModule.forFeature([User, Role, Country])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
