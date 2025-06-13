import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
import { User } from '../../domain/entities/user.entity';
import { UserEntity } from '../persistence/user.entity';

export interface UserRepository {
  save(user: User): Promise<UserEntity>;
  
  findAll(
    page: number,
    limit: number
  ): Promise<PaginatedResult<UserEntity>>;
}
