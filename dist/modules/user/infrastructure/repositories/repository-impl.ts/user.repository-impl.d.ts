import { UserRepository } from '../user.repository';
import { UserEntity } from '../../persistence/user.entity';
import { Repository } from 'typeorm';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { PaginatedResult } from 'src/shared/pagination/interfaces/pagination-result.interface';
export declare class UserRepositoryImpl implements UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    save(user: User): Promise<UserEntity>;
    findAll(page: number, limit: number): Promise<PaginatedResult<UserEntity>>;
}
