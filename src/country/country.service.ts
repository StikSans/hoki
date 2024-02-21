import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Country} from "./country.model";
import {CreateCountryDto} from "./dto/create-country.dto";

@Injectable()
export class CountryService {

    constructor(@InjectModel(Country) private countryRepository: typeof Country) {
    }

    async findAll() {
        return await this.countryRepository.findAll()
    }

    async deleteById(id:number) {
        return await this.countryRepository.destroy({
            where: {id}
        })
    }

    async createCountry(dto: CreateCountryDto) {
        return await this.countryRepository.create(dto)
    }

}
