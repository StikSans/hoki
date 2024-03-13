export class CreateImgDto {
  readonly img: Express.Multer.File
  readonly post_id: number
}