import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
import { UserDto } from '../../application/dto/user.dto';

export interface UserService {
  create(name: string, point: number): Promise<UserDto>;

  findById(id: string): Promise<UserDto>;

  // findOne(id: string): Promise<User>;

  // update(id: string, updateUserCommand: UpdateUserCommand): Promise<User>;

  // remove(id: string): Promise<void>;
}
