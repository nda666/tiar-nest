import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    phone = "phone",
    password = "password",
    name = "name",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProfileScalarFieldEnum {
    id = "id",
    bio = "bio",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}

registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateProfile {
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregate>;
    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@ArgsType()
export class CreateManyProfileArgs {
    @Field(() => [ProfileCreateManyInput], {nullable:false})
    data!: Array<ProfileCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProfileArgs {
    @Field(() => ProfileCreateInput, {nullable:false})
    data!: InstanceType<typeof ProfileCreateInput>;
}

@ArgsType()
export class DeleteManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class DeleteOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class ProfileAggregateArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregateInput>;
    @Field(() => ProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@InputType()
export class ProfileAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProfileCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProfileCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProfileCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileCreateInput {
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
}

@ArgsType()
export class ProfileGroupByArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithAggregationInput>;
    @Field(() => [ProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProfileScalarFieldEnum>;
    @Field(() => ProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProfileScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregateInput>;
    @Field(() => ProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@ObjectType()
export class ProfileGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregate>;
    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@InputType()
export class ProfileMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProfileMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProfileMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProfileMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProfileOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProfileCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountOrderByAggregateInput>;
    @Field(() => ProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgOrderByAggregateInput>;
    @Field(() => ProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxOrderByAggregateInput>;
    @Field(() => ProfileMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinOrderByAggregateInput>;
    @Field(() => ProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumOrderByAggregateInput>;
}

@InputType()
export class ProfileOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProfileRelationFilter {
    @Field(() => ProfileWhereInput, {nullable:true})
    is?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProfileSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProfileUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProfileInput>;
}

@InputType()
export class ProfileUpsertWithoutUserInput {
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof ProfileUpdateWithoutUserInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Profile {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class UpdateManyProfileArgs {
    @Field(() => ProfileUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProfileUpdateManyMutationInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class UpdateOneProfileArgs {
    @Field(() => ProfileUpdateInput, {nullable:false})
    data!: InstanceType<typeof ProfileUpdateInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateInput>;
    @Field(() => ProfileUpdateInput, {nullable:false})
    update!: InstanceType<typeof ProfileUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @HideField()
    role?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @HideField()
    role?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    role?: keyof typeof Role;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    role?: keyof typeof Role;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    role?: keyof typeof Role;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    profile?: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @HideField()
    role?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @HideField()
    role?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @HideField()
    role?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @HideField()
    role?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @HideField()
    role?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @HideField()
    role?: keyof typeof SortOrder;
    @HideField()
    profile?: InstanceType<typeof ProfileOrderByWithRelationInput>;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @HideField()
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    role?: keyof typeof Role;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @HideField()
    role?: keyof typeof Role;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    profile?: InstanceType<typeof ProfileUncheckedCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    profile?: InstanceType<typeof ProfileUncheckedUpdateOneWithoutUserInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUpdateWithoutProfileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    profile?: InstanceType<typeof ProfileUpdateOneWithoutUserInput>;
}

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutProfileInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @HideField()
    role?: InstanceType<typeof EnumRoleFilter>;
    @HideField()
    profile?: InstanceType<typeof ProfileRelationFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;
    @Field(() => Profile, {nullable:true})
    profile?: InstanceType<typeof Profile> | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
