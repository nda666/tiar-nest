import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  MisdirectedException,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

interface IErrorMessage {
  property: string;
  constraints: object;
}

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object, {
      forbidUnknownValues: true,
    });
    if (errors.length > 0) {
      const errorMessage = this.buildMessage(errors);
      throw new MisdirectedException(errorMessage);
    }
    return value;
  }

  private buildMessage(errors: ValidationError[]) {
    let result: IErrorMessage[] = [];
    errors.forEach((x) => {
      if (x.constraints) {
        result.push({ property: x.property, constraints: x.constraints });
      } else if (x.children) {
        result = [...result, ...this.buildMessage(x.children)];
      }
    });
    return result;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
