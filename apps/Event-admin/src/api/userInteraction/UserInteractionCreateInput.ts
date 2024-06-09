import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type UserInteractionCreateInput = {
  event?: EventWhereUniqueInput | null;
  interactionType?: "Option1" | null;
  userProfileId?: string | null;
};
