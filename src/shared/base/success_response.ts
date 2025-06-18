import { HttpStatus } from '@nestjs/common';
import { ApiProperty, getSchemaPath, refs } from '@nestjs/swagger';

export class SuccessResponse<T> {
  @ApiProperty({
    description: 'Message describing the success response',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP status code',
  })
  statusCode: HttpStatus;

  @ApiProperty()
  data: T;

  constructor(message: string, statusCode: HttpStatus, data: T) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
