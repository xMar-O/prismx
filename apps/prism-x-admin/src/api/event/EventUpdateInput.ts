import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserInteractionUpdateManyWithoutEventsInput } from "./UserInteractionUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  userInteractions?: UserInteractionUpdateManyWithoutEventsInput;
};
