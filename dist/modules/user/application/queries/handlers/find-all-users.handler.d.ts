import { IQueryHandler } from '@nestjs/cqrs';
import { FindAllUsersQuery } from '../find-all-users.query';
import { UserService } from '../../services/user.service';
import { PaginationResponseDto } from 'src/shared/pagination/dto/pagination-response.dto';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
export declare class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
    private readonly userService;
    constructor(userService: UserService);
    execute(command: FindAllUsersQuery): Promise<PaginationResponseDto<UserEntity>>;
}
