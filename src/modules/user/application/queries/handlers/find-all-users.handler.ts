import { CommandHandler, ICommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllUsersQuery } from '../find-all-users.query';
import { Inject } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { PaginationResponseDto } from 'src/shared/pagination/dto/pagination-response.dto';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserEntity } from 'src/modules/user/infrastructure/persistence/user.entity';

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery>
{
  constructor(
    @Inject('UserService')
    private readonly userService: UserService,
  ) {}

  async execute(command: FindAllUsersQuery): Promise<PaginationResponseDto<UserEntity>> {
    const { page, limit } = command;

    const { data, total } = await this.userService.findAll(page, limit);

    return new PaginationResponseDto(data, total, page, limit);
  }
}
