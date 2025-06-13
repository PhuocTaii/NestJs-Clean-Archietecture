import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../persistence/user.entity';
import { Repository } from 'typeorm';
import { User } from 'src/modules/user/domain/entities/user.domain';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<UserEntity> {
    const entity = this.userRepository.create(user);
    const saved = await this.userRepository.save(entity);
    return new UserEntity(saved.name, saved.email, saved.password);
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<PaginatedResult<UserEntity>> {
    const [users, total] = await this.userRepository.findAndCount({
      skip: page * limit,
      take: limit
    });

    return {
      data: users.map(
        (user) => new UserEntity(user.name, user.email, user.password),
      ),
      total
    };
  }
}
