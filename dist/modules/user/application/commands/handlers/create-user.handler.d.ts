import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../dto/user.dto';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userService;
    constructor(userService: UserService);
    execute(command: CreateUserCommand): Promise<UserDto>;
}
