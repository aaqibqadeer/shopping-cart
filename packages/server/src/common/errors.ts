import { HttpStatus } from '@nestjs/common';

export enum HttpErrors {
  CONFLICT = 'Conflict',
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  INTERNAL_SERVER_ERROR = 'Internal Server Error!!!!!!!!!!!!!',
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  NOT_FOUND = 'Not Found',
  FORBIDDEN = 'Forbidden',
  PAYMENT_REQUIRED = 'Payment Required',
  NOT_ACCEPTABLE = 'Not Acceptable',
  REQUEST_TIMEOUT = 'Request Timeout',
  PRECONDITION_FAILED = 'Precondition Failed',
}

export const defaultInternalServerErrorResponse = {
  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  error: HttpErrors.INTERNAL_SERVER_ERROR,
  message: 'Please try again later!',
};
