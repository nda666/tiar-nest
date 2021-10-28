import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';



export interface IOffsetPaginatedType<T> {
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function OffsetPaginated<T>(classRef: Type<T>): Type<IOffsetPaginatedType<T>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field((type) => classRef)
    node: T;

    @Field()
    currentPage: boolean;

    @Field()
    nextPage: boolean;

    @Field()
    prevPage: boolean;
  }

  @ObjectType({ isAbstract: true })
  abstract class OffsetPaginatedType implements IOffsetPaginatedType<T> {
    @Field((type) => [EdgeType], { nullable: true })
    edges: EdgeType[];

    @Field((type) => [classRef], { nullable: true })
    nodes: T[];

    @Field((type) => Int)
    totalCount: number;

    @Field((type) => Int)
    currentPage: number;

    @Field((type) => Int,  {nullable: true})
    nextPage: number;

    @Field((type) => Int, {nullable: true})
    prevPage: number;

    @Field()
    hasNextPage: boolean;

    @Field()
    hasPrevPage: boolean;
  }
  return OffsetPaginatedType as Type<IOffsetPaginatedType<T>>;
}