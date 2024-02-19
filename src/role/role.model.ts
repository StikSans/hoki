import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";


interface CreateRoleAttrs {
    name: string
}

@Table({tableName:'role'})
export class Role extends Model<Role, CreateRoleAttrs> {

    @Column({type:DataType.INTEGER, autoIncrement:true, unique:true, primaryKey:true})
    id:number

    @Column({type:DataType.STRING, allowNull:false})
    name:string

    @HasMany(() => User)
    user: User[]

}