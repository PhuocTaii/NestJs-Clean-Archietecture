import { User } from 'src/modules/user/domain/entities/user.domain';
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../../domain/services/user.service';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async create(name: string, point: number): Promise<UserDto> {
    const user = new User(name, point);

    const res = await this.userRepository.save(user);

    return new UserDto(
      res.id,
      res.name,
      res.point
    );
  }
  
  async findById(id: string): Promise<UserDto> {
    const res = await this.userRepository.findById(id);

    if (!res) {
      throw new Error(`User with id ${id} not found`);
    }

    return new UserDto(
      res.id,
      res.name,
      res.point
    );
  }
}
