import {
  applyDecorators,
  HttpStatus,
  Type,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { SuccessResponse } from '../base/success_response';

export const SwaggerResponse = <TModel extends Type<any>>(
  model: TModel,
  message = 'Success',
  statusCode: HttpStatus,
) => {
  return applyDecorators(
    ApiExtraModels(SuccessResponse, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(SuccessResponse) },
          {
            properties: {
              message: { type: 'string', example: message },
              statusCode: { type: 'number', example: statusCode },
              data: { $ref: getSchemaPath(model) },
            },
          },
        ],
      },
    }),
  );
};
