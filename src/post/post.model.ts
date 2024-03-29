import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { Img } from 'src/img/img.model'
import { User } from 'src/user/user.model'
import { Likes } from './likes.model'
import { Coment } from '../coment/coment.model'

interface CreatePostAttrs {
  id: number
  text?: string
  likes: number
  user_id: number
}

@Table({ tableName: 'post' })
export class Post extends Model<Post, CreatePostAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column({ type: DataType.STRING })
  text: string

  @BelongsTo(() => User, 'user_id')
  user: User

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number

  @HasMany(() => Img)
  img: Img[]

  @HasMany(() => Coment)
  coment: Comment[]

  @BelongsToMany(() => User, () => Likes, 'post_id')
  user_likes: User[]
}
