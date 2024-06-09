import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserInteractionListRelationFilter } from "../userInteraction/UserInteractionListRelationFilter";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  userId?: StringNullableFilter;
  userInteractions?: UserInteractionListRelationFilter;
};
