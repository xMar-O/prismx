import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserInteractionListRelationFilter } from "../userInteraction/UserInteractionListRelationFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  profilePicture?: JsonFilter;
  user?: UserWhereUniqueInput;
  userInteractions?: UserInteractionListRelationFilter;
};
