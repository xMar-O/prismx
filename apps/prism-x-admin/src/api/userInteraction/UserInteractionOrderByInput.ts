import { SortOrder } from "../../util/SortOrder";

export type UserInteractionOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  interactionType?: SortOrder;
  updatedAt?: SortOrder;
  userProfileId?: SortOrder;
};
