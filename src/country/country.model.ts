import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";


interface CreateCountryAttrs {
    country: string
}

@Table({tableName:'country'})
export class Country extends Model<Country, CreateCountryAttrs>{

    @Column({type:DataType.INTEGER, autoIncrement: true, unique:true, primaryKey: true})
    id: number

    @Column({type:DataType.STRING, allowNull:false})
    country: string

    @HasMany(() => User)
    user: User[]

}