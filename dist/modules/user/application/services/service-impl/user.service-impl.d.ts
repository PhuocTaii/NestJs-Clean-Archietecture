import { UserService } from '../user.service';
import { UserRepository } from 'src/modules/user/infrastructure/repositories/user.repository';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
export declare class UserServiceImpl implements UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(name: string, email: string, password: string): Promise<UserEntity>;
    findAll(page: number, limit: number): Promise<PaginatedResult<UserEntity>>;
}
