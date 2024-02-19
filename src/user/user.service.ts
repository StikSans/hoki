import { Injectable } from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userRepository: typeof User) {
    }

    async getAll() {
        return this.userRepository.findAll()
    }

    async create(createDto: CreateUserDto) {
        return this.userRepository.create(createDto)
    }


}
