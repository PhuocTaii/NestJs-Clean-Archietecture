import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindUserByIdQuery } from '../../application/queries/find-user-by-id.query';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { UserDto } from '../../application/dto/user.dto';
import { SuccessResponse } from 'src/shared/base/success_response';
import { SwaggerResponse } from 'src/shared/utils/swagger_response.helper';
import { CreateUserDto } from '../../application/dto/create_user.dto';

@Controller('user')
@ApiHeader({
  name: 'x-test-token',
  description: 'Test token for API',
})
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 404, description: 'Not Found.' })
@ApiResponse({ status: 400, description: 'Bad Request.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.' })
@ApiTags('User')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @SwaggerResponse(
    CreateUserDto,
    'User created successfully',
    HttpStatus.CREATED,
  )
  create(@Body() createUserCommand: CreateUserCommand) {
    const { name, point } = createUserCommand;
    return this.commandBus.execute(new CreateUserCommand(name, point));
  }

  @Get(':id')
  @SwaggerResponse(UserDto, 'User found successfully', HttpStatus.OK)
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
