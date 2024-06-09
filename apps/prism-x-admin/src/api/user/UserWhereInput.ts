import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userProfiles?: UserProfileListRelationFilter;
};
