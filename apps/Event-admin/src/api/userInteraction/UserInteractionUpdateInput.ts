import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type UserInteractionUpdateInput = {
  event?: EventWhereUniqueInput | null;
  interactionType?: "Option1" | null;
  userProfileId?: string | null;
};
