import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Img } from './img.model'
import { FileService } from 'src/file/file.service'
import { CreateImgDto } from './dto/create-img.dto'

@Injectable()
export class ImgService {
  constructor(
    @InjectModel(Img) private imgRepository: typeof Img,
    private fileService: FileService,
  ) {}

  async createImg(createDto: CreateImgDto, img: Express.Multer.File) {
    const fileName = await this.fileService.saveFile(createDto.img)
    const newImg = {
      ...createDto,
      img: fileName
    }
    return await this.imgRepository.create(newImg)
  }

}
