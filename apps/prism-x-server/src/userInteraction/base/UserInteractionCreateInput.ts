/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumUserInteractionInteractionType } from "./EnumUserInteractionInteractionType";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@InputType()
class UserInteractionCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumUserInteractionInteractionType,
  })
  @IsEnum(EnumUserInteractionInteractionType)
  @IsOptional()
  @Field(() => EnumUserInteractionInteractionType, {
    nullable: true,
  })
  interactionType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfile?: UserProfileWhereUniqueInput | null;
}

export { UserInteractionCreateInput as UserInteractionCreateInput };
