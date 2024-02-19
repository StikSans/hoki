import {Body, Controller, Get, Post} from '@nestjs/common';
import { RoleService } from './role.service';
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  get() {
    return this.roleService.getRole()
  }

  @Post()
  create (@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto)
  }

}
