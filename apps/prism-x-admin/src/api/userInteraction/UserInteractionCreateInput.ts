import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserInteractionCreateInput = {
  event?: EventWhereUniqueInput | null;
  interactionType?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
