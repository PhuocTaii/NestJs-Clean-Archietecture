import { CreateUserCommand } from '../../application/commands/create-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { PaginationDto } from 'src/shared/pagination/dto/pagination-query.dto';
export declare class UserController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    create(createUserCommand: CreateUserCommand): Promise<any>;
    findAll(pageRequest: PaginationDto): Promise<any>;
}
