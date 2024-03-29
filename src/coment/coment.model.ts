import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { Post } from '../post/post.model'
import { User } from '../user/user.model'

interface CreateComentAttrs {
  post_id: number
  text: string
  user_id
}

@Table({ tableName: 'coment' })
export class Coment extends Model<Coment, CreateComentAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number

  @BelongsTo(() => Post)
  post: Post

  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER, allowNull: false })
  post_id: number

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number

  @Column({ type: DataType.STRING, allowNull: false })
  text: string
}
