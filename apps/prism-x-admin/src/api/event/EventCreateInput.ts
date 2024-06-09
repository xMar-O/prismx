import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserInteractionCreateNestedManyWithoutEventsInput } from "./UserInteractionCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  userInteractions?: UserInteractionCreateNestedManyWithoutEventsInput;
};
