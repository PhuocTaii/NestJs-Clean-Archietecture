import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserService } from '../../services/user.service';
import { Inject } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
import { UserDto } from '../../dto/user.dto';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @Inject('UserService')
    private readonly userService: UserService,
  ) {}

  async execute(command: CreateUserCommand): Promise<UserDto> {
    //Call to service
    const { name, email, password } = command;
    const user = await this.userService.create(name, email, password);
    
    return new UserDto(
      user.name,
      user.email
    );
  }
}
