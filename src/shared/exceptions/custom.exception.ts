import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }

  static notFound(message: string): CustomException {
    return new CustomException(message, HttpStatus.NOT_FOUND);
  }

  static badRequest(message: string): CustomException {
    return new CustomException(message, HttpStatus.BAD_REQUEST);
  }

  static internalServerError(message: string): CustomException {
    return new CustomException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  static forbidden(message: string): CustomException {
    return new CustomException(message, HttpStatus.FORBIDDEN);
  }

  static unauthorized(message: string): CustomException {
    return new CustomException(message, HttpStatus.UNAUTHORIZED);
  }
}
