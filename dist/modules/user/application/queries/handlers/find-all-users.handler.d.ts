import { IQueryHandler } from '@nestjs/cqrs';
import { FindAllUsersQuery } from '../find-all-users.query';
import { UserService } from '../../services/user.service';
import { PaginationResponseDto } from 'src/shared/pagination/dto/pagination-response.dto';
import { UserDto } from '../../dto/user.dto';
export declare class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
    private readonly userService;
    constructor(userService: UserService);
    execute(command: FindAllUsersQuery): Promise<PaginationResponseDto<UserDto>>;
}
