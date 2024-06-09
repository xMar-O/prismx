import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserInteractionWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  interactionType?: "Option1";
  userProfile?: UserProfileWhereUniqueInput;
};
