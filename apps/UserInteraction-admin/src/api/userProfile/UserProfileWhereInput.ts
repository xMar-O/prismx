import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  profilePicture?: JsonFilter;
  userId?: StringNullableFilter;
  userInteractions?: JsonFilter;
};
