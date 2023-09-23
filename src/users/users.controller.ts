import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
import { User } from 'src/common/models/user.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(dto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(dto);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
