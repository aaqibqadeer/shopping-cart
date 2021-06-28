import { HttpStatus } from '@nestjs/common';
import { HttpErrors } from './error';

export const defaultInternalServerErrorResponse = {
  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  error: HttpErrors.INTERNAL_SERVER_ERROR,
  message: 'Internal Server Error',
};
