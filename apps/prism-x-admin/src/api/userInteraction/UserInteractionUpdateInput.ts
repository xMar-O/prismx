import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserInteractionUpdateInput = {
  event?: EventWhereUniqueInput | null;
  interactionType?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
