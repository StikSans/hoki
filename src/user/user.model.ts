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

import { Role } from '../role/role.model'
import { Country } from '../country/country.model'
import { Post } from 'src/post/post.model'
import { Likes } from '../post/likes.model'
import { Coment } from '../coment/coment.model'

interface CreateUserAttrs {
  login: string
  name: string
  sur_name: string
  sex?: string
  avatar?: string
  password: string
  date?: any
  country_id?: number
}

@Table({ tableName: 'users', deletedAt: 'destroyTime', paranoid: true })
export class User extends Model<User, CreateUserAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.STRING, allowNull: false })
  sur_name: string

  @Column({ type: DataType.STRING })
  sex: string

  @Column({ type: DataType.STRING })
  avatar: string

  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @Column({ type: DataType.DATE })
  date: any

  @BelongsTo(() => Role)
  role: Role

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  role_id: number

  @BelongsTo(() => Country)
  country: Country

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number

  @HasMany(() => Post)
  posts: Post[]

  @HasMany(() => Coment)
  coment: Coment[]

  @BelongsToMany(() => Post, () => Likes, 'user_id')
  post_likes: Post[]
}
