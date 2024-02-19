import { Controller } from '@nestjs/common';
import { CountriyService } from './countriy.service';

@Controller('countriy')
export class CountriyController {
  constructor(private readonly countriyService: CountriyService) {}
}
