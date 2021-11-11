import { Field, ObjectType, Int, ArgsType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export interface IOffsetPaginatedArgs {
  page: number;
  first: number;
}

export interface IOffsetPaginatedType<T> {
  nodes: T[];
  currentPage: number;
  totalPage: number;
  totalCount: number;
}
export function OffsetPaginatedArgs(classRef: Type<any>): any {
  @ArgsType()
  abstract class OffsetPaginatedArgsType
    extends classRef
    implements IOffsetPaginatedArgs
  {
    @Field(() => Int, { defaultValue: 1 })
    page: number;

    @Field(() => Int, { defaultValue: 10 })
    first: number;
  }

  return OffsetPaginatedArgsType;
}

export function OffsetPaginated<T>(
  classRef: Type<T>,
): Type<IOffsetPaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class OffsetPaginatedType implements IOffsetPaginatedType<T> {
    @Field(() => [classRef], { nullable: true })
    nodes: T[];

    @Field(() => Int)
    totalCount: number;

    @Field(() => Int, { nullable: true })
    totalPage: number;

    @Field(() => Int)
    currentPage: number;
  }

  return OffsetPaginatedType as Type<IOffsetPaginatedType<T>>;
}
