import { Controller } from '@nestjs/common';
import { ImgService } from './img.service';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}
}
