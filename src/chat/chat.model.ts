import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { User } from '../user/user.model'
import { Message } from './message.model'

@Table({ tableName: 'chat' })
export class Chat extends Model<Chat> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: number

  @BelongsTo(() => User, 'ownerId')
  user: User

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  participantId: number

  @BelongsTo(() => User, 'participantId')
  participant: User

  @HasMany(() => Message)
  message: Message[]
}
