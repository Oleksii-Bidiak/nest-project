import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ICreateUserAttrs } from '../interfaces/user.interface';

@Table({ tableName: 'users' })
export class User extends Model<User, ICreateUserAttrs> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING, unique: true })
  userName: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;
}
