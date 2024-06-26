/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserInteractionWhereUniqueInput } from "../../userInteraction/base/UserInteractionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserInteractionUpdateManyWithoutEventsInput {
  @Field(() => [UserInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserInteractionWhereUniqueInput],
  })
  connect?: Array<UserInteractionWhereUniqueInput>;

  @Field(() => [UserInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserInteractionWhereUniqueInput],
  })
  disconnect?: Array<UserInteractionWhereUniqueInput>;

  @Field(() => [UserInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserInteractionWhereUniqueInput],
  })
  set?: Array<UserInteractionWhereUniqueInput>;
}

export { UserInteractionUpdateManyWithoutEventsInput as UserInteractionUpdateManyWithoutEventsInput };
