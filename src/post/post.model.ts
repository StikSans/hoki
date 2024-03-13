import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript'
import { Img } from 'src/img/img.model'
import { User } from 'src/user/user.model'

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

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  likes: number

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number

  @HasMany(() => Img)
  img: Img[]
}
