import { UserEntity } from '../../infrastructure/persistence/user.entity';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';

export interface UserService {
  create(name: string, email: string, password: string): Promise<UserEntity>;

  findAll(
    page: number,
    limit: number
  ): Promise<PaginatedResult<UserEntity>>;

  // findOne(id: string): Promise<User>;

  // update(id: string, updateUserCommand: UpdateUserCommand): Promise<User>;

  // remove(id: string): Promise<void>;
}
