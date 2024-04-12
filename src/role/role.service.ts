import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./role.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RoleService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async getRole () {
        return this.roleRepository.findAll()
    }

    async createRole(dto: CreateRoleDto) {
        return this.roleRepository.create(dto)
    }
}
