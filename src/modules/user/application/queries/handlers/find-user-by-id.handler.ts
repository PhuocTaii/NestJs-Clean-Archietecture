import { QueryHandler } from '@nestjs/cqrs';
import { FindUserByIdQuery } from '../find-user-by-id.query';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { UserService } from 'src/modules/user/domain/services/user.service';
import { SuccessResponse } from 'src/shared/base/success_response';

@QueryHandler(FindUserByIdQuery)
export class FindUserByIdQueryHandler {
  constructor(
    @Inject('UserService')
    private readonly userService: UserService,
  ) {}

  async execute(query: FindUserByIdQuery): Promise<SuccessResponse<UserDto>> {
    try{
      const { id } = query;
      const res = await this.userService.findById(id);
      return new SuccessResponse<UserDto>(
        'User found successfully',
        HttpStatus.OK,
        res,
      );
    } catch (error) {
      throw error;
    }
  }
}
