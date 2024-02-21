import {Column, DataType, Model, Table} from "sequelize-typescript";


interface CreateCountryAttrs {
    country: string
}

@Table({tableName:'country'})
export class Country extends Model<Country, CreateCountryAttrs>{

    @Column({type:DataType.INTEGER, autoIncrement: true, unique:true, primaryKey: true})
    id: number

    @Column({type:DataType.STRING, allowNull:false})
    country: string

}