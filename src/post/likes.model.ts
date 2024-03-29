import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { Post } from './post.model'
import { User } from '../user/user.model'

@Table({ tableName: 'post_likes', updatedAt: false })
export class Likes extends Model<Likes> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER })
  post_id: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number
}
