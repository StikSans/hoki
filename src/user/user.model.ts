import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Role} from "../role/role.model";


interface CreateUserAttrs {
    login: string
    name: string
    sur_name: string
    sex: string
    password: string
    date: any
}

@Table({tableName:'users', deletedAt:'destroyTime', paranoid:true})
export class User extends Model<User, CreateUserAttrs> {

    @Column({type:DataType.INTEGER, autoIncrement:true, unique:true, primaryKey:true})
    id: number

    @Column({type:DataType.STRING, unique:true, allowNull:false})
    login: string

    @Column({type:DataType.STRING, allowNull:false})
    name: string

    @Column({type:DataType.STRING, allowNull:false})
    sur_name: string

    @Column({type:DataType.STRING, allowNull:false})
    sex: string

    @Column({type:DataType.STRING, allowNull:false})
    password: string

    @Column({type: DataType.DATE, allowNull:false})
    date: any

    @BelongsTo(() => Role)
    role: Role

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, allowNull:false, defaultValue: 1})
    role_id:string
}