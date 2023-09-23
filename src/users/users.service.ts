import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
import { User } from 'src/common/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const candidate = await this.findUserByEmail(dto.email);
    if (candidate) {
      throw new ConflictException(
        'Користувач з такою електронною поштою вже існує',
      );
    }
    const hashPassword = await this.hashPassword(dto.password);
    const user = await this.userRepository.create({
      ...dto,
      password: hashPassword,
    });

    return user;
  }DF

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8);
  }

  private async findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.userRepository.findOne({ where: { email } });
    return user;
  }
}
