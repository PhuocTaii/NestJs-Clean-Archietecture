import {
  Controller,
  Get,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindAllUsersQuery } from '../../application/queries/find-all-users.query';
import { PaginationDto } from 'src/shared/pagination/dto/pagination-query.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() createUserCommand: CreateUserCommand) {
    const { name, email, password } = createUserCommand;
    return this.commandBus.execute(
      new CreateUserCommand(name, email, password),
    );
  }

  @Get()
  findAll(@Query() pageRequest: PaginationDto) {
    const {
      page,
      limit,
    } = pageRequest;
    return this.queryBus.execute(new FindAllUsersQuery(page, limit));
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commandBus.execute(new FindUserByIdCommand(id));
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserCommand: UpdateUserCommand) {
  //   return this.commandBus.execute(new UpdateUserCommand(id, updateUserCommand));
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commandBus.execute(new RemoveUserCommand(id));
  // }
}
