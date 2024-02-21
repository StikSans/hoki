import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CountryService } from './country.service';
import {CreateCountryDto} from "./dto/create-country.dto";

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create (@Body() dto: CreateCountryDto) {
    return this.countryService.createCountry(dto)
  }
  @Get()
  get () {
    return this.countryService.findAll()
  }
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.countryService.deleteById(id)
  }


}
