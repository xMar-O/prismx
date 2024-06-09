import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserInteractionWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  interactionType?: "Option1";
  userProfileId?: StringNullableFilter;
};
