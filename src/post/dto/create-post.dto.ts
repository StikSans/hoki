export class CreatePostDto {
  readonly id: number
  readonly text?: string
  readonly likes: number
  readonly user_id: number
}