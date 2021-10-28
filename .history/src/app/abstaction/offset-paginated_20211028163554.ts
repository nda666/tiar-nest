import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export interface IOffsetPaginatedType<T> {
  nodes: T[];
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPage: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
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

    @Field((type) => Int, { nullable: true })
    nextPage: number;

    @Field((type) => Int, { nullable: true })
    prevPage: number;

    @Field()
    hasNextPage: boolean;

    @Field()
    hasPrevPage: boolean;
  }
  return OffsetPaginatedType as Type<IOffsetPaginatedType<T>>;
}
