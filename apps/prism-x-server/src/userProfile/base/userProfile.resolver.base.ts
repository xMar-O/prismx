/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserProfile } from "./UserProfile";
import { UserProfileCountArgs } from "./UserProfileCountArgs";
import { UserProfileFindManyArgs } from "./UserProfileFindManyArgs";
import { UserProfileFindUniqueArgs } from "./UserProfileFindUniqueArgs";
import { CreateUserProfileArgs } from "./CreateUserProfileArgs";
import { UpdateUserProfileArgs } from "./UpdateUserProfileArgs";
import { DeleteUserProfileArgs } from "./DeleteUserProfileArgs";
import { UserInteractionFindManyArgs } from "../../userInteraction/base/UserInteractionFindManyArgs";
import { UserInteraction } from "../../userInteraction/base/UserInteraction";
import { User } from "../../user/base/User";
import { UserProfileService } from "../userProfile.service";
@graphql.Resolver(() => UserProfile)
export class UserProfileResolverBase {
  constructor(protected readonly service: UserProfileService) {}

  async _userProfilesMeta(
    @graphql.Args() args: UserProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserProfile])
  async userProfiles(
    @graphql.Args() args: UserProfileFindManyArgs
  ): Promise<UserProfile[]> {
    return this.service.userProfiles(args);
  }

  @graphql.Query(() => UserProfile, { nullable: true })
  async userProfile(
    @graphql.Args() args: UserProfileFindUniqueArgs
  ): Promise<UserProfile | null> {
    const result = await this.service.userProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserProfile)
  async createUserProfile(
    @graphql.Args() args: CreateUserProfileArgs
  ): Promise<UserProfile> {
    return await this.service.createUserProfile({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserProfile)
  async updateUserProfile(
    @graphql.Args() args: UpdateUserProfileArgs
  ): Promise<UserProfile | null> {
    try {
      return await this.service.updateUserProfile({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserProfile)
  async deleteUserProfile(
    @graphql.Args() args: DeleteUserProfileArgs
  ): Promise<UserProfile | null> {
    try {
      return await this.service.deleteUserProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [UserInteraction], { name: "userInteractions" })
  async findUserInteractions(
    @graphql.Parent() parent: UserProfile,
    @graphql.Args() args: UserInteractionFindManyArgs
  ): Promise<UserInteraction[]> {
    const results = await this.service.findUserInteractions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: UserProfile): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
