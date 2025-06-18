import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindUserByIdQuery } from '../../application/queries/find-user-by-id.query';
import { ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../application/dto/user.dto';

@Controller('user')
@ApiHeader({
  name: 'x-test-token',
  description: 'Test token for API',
})
@ApiResponse({ status: 403, description: 'Forbidden.'})
@ApiResponse({ status: 404, description: 'Not Found.'})
@ApiResponse({ status: 400, description: 'Bad Request.'})
@ApiResponse({ status: 500, description: 'Internal Server Error.'})
@ApiTags('User')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto
  })
  create(@Body() createUserCommand: CreateUserCommand) {
    const { name, point} = createUserCommand;
    return this.commandBus.execute(
      new CreateUserCommand(name, point),
    );
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The record has been successfully retrieved.',
    type: UserDto,
  })
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new FindUserByIdQuery(id));
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserCommand: UpdateUserCommand) {
  //   return this.commandBus.execute(new UpdateUserCommand(id, updateUserCommand));
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commandBus.execute(new RemoveUserCommand(id));
  // }
}
