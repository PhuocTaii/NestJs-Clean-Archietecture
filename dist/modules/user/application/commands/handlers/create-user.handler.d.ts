import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserService } from '../../services/user.service';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userService;
    constructor(userService: UserService);
    execute(command: CreateUserCommand): Promise<UserEntity>;
}
