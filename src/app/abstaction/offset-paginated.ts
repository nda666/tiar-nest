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
export function OffsetPaginatedArgs() {
  @ArgsType()
  abstract class OffsetPaginatedArgsType implements IOffsetPaginatedArgs {
    @Field((type) => Int, { defaultValue: 1 })
    page: number;

    @Field((type) => Int, { defaultValue: 10 })
    first: number;
  }
  return OffsetPaginatedArgsType as Type<IOffsetPaginatedArgs>;
}

export function OffsetPaginated<T>(
  classRef: Type<T>,
): Type<IOffsetPaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class OffsetPaginatedType implements IOffsetPaginatedType<T> {
    @Field((type) => [classRef], { nullable: true })
    nodes: T[];

    @Field((type) => Int)
    totalCount: number;

    @Field((type) => Int, { nullable: true })
    totalPage: number;

    @Field((type) => Int)
    currentPage: number;
  }

  return OffsetPaginatedType as Type<IOffsetPaginatedType<T>>;
}
