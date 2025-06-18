import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/user/domain/entities/user.domain';
import { UserEntity } from '../persistence/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<UserEntity> {
    const entity = this.userRepository.create(user);
    const saved = await this.userRepository.save(entity);
    return saved;
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id });
  }
}
