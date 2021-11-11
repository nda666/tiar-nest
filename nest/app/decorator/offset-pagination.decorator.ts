import { createParamDecorator } from '@nestjs/common';

export const OffsetPagination = createParamDecorator((data: unknown) => {
  return data;
});
