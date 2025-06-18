import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
import { User } from '../entities/user.domain';
import { UserEntity } from '../../infrastructure/persistence/user.entity';

export interface UserRepository {
  save(user: User): Promise<UserEntity>;

  findById(id: string): Promise<UserEntity>;
}
