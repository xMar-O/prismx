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
import { UserInteraction } from "./UserInteraction";
import { UserInteractionCountArgs } from "./UserInteractionCountArgs";
import { UserInteractionFindManyArgs } from "./UserInteractionFindManyArgs";
import { UserInteractionFindUniqueArgs } from "./UserInteractionFindUniqueArgs";
import { CreateUserInteractionArgs } from "./CreateUserInteractionArgs";
import { UpdateUserInteractionArgs } from "./UpdateUserInteractionArgs";
import { DeleteUserInteractionArgs } from "./DeleteUserInteractionArgs";
import { Event } from "../../event/base/Event";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { UserInteractionService } from "../userInteraction.service";
@graphql.Resolver(() => UserInteraction)
export class UserInteractionResolverBase {
  constructor(protected readonly service: UserInteractionService) {}

  async _userInteractionsMeta(
    @graphql.Args() args: UserInteractionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserInteraction])
  async userInteractions(
    @graphql.Args() args: UserInteractionFindManyArgs
  ): Promise<UserInteraction[]> {
    return this.service.userInteractions(args);
  }

  @graphql.Query(() => UserInteraction, { nullable: true })
  async userInteraction(
    @graphql.Args() args: UserInteractionFindUniqueArgs
  ): Promise<UserInteraction | null> {
    const result = await this.service.userInteraction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserInteraction)
  async createUserInteraction(
    @graphql.Args() args: CreateUserInteractionArgs
  ): Promise<UserInteraction> {
    return await this.service.createUserInteraction({
      ...args,
      data: {
        ...args.data,

        event: args.data.event
          ? {
              connect: args.data.event,
            }
          : undefined,

        userProfile: args.data.userProfile
          ? {
              connect: args.data.userProfile,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserInteraction)
  async updateUserInteraction(
    @graphql.Args() args: UpdateUserInteractionArgs
  ): Promise<UserInteraction | null> {
    try {
      return await this.service.updateUserInteraction({
        ...args,
        data: {
          ...args.data,

          event: args.data.event
            ? {
                connect: args.data.event,
              }
            : undefined,

          userProfile: args.data.userProfile
            ? {
                connect: args.data.userProfile,
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

  @graphql.Mutation(() => UserInteraction)
  async deleteUserInteraction(
    @graphql.Args() args: DeleteUserInteractionArgs
  ): Promise<UserInteraction | null> {
    try {
      return await this.service.deleteUserInteraction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Event, {
    nullable: true,
    name: "event",
  })
  async getEvent(
    @graphql.Parent() parent: UserInteraction
  ): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfile",
  })
  async getUserProfile(
    @graphql.Parent() parent: UserInteraction
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
