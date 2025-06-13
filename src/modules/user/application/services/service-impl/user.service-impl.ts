import { User } from 'src/modules/user/domain/entities/user.domain';
import { UserService } from '../user.service';
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/infrastructure/repositories/user.repository';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async create(name: string, email: string, password: string): Promise<UserEntity> {
    const user = new User(name, email, password);
    return this.userRepository.save(user);
  }

  async findAll(page: number, limit: number): Promise<PaginatedResult<UserEntity>> {
    return this.userRepository.findAll(page, limit);
  }

}
