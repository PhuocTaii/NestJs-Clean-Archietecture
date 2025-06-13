import { CommandHandler, ICommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllUsersQuery } from '../find-all-users.query';
import { Inject } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { PaginationResponseDto } from 'src/shared/pagination/dto/pagination-response.dto';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';
import { UserDto } from '../../dto/user.dto';

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery>
{
  constructor(
    @Inject('UserService')
    private readonly userService: UserService,
  ) {}

  async execute(command: FindAllUsersQuery): Promise<PaginationResponseDto<UserDto>> {
    const { page, limit } = command;

    const { data, total } = await this.userService.findAll(page, limit);

    const userDtos = data.map(user => new UserDto(
      user.name,
      user.email,
    ));

    return new PaginationResponseDto(userDtos, total, page, limit);
  }
}
