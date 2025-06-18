import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { HttpStatus, Inject } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { UserService } from 'src/modules/user/domain/services/user.service';
import { SuccessResponse } from 'src/shared/base/success_response';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @Inject('UserService')
    private readonly userService: UserService,
  ) {}

  async execute(command: CreateUserCommand): Promise<SuccessResponse<UserDto>> {
    //Call to service
    const { name, point } = command;

    const user = await this.userService.create(name, point);

    return new SuccessResponse<UserDto>(
      "User created successfully",
      HttpStatus.CREATED,
      user
    );
  }
}
