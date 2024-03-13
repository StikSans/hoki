import {
  Model,
  Column,
  DataType,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript'
import { Post } from 'src/post/post.model'

interface CreateImgAttrs {
  img: string
  post_id: number
}

@Table({ tableName: 'img_post' , createdAt: false, updatedAt: false})
export class Img extends Model<Img, CreateImgAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  img: string

  @BelongsTo(() => Post)
  post: Post

  @ForeignKey(() => Post)
  @Column({type: DataType.INTEGER, allowNull: false})
  post_id: number
}
