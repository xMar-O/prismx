import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserInteractionCreateNestedManyWithoutUserProfilesInput } from "./UserInteractionCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  bio?: string | null;
  profilePicture?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  userInteractions?: UserInteractionCreateNestedManyWithoutUserProfilesInput;
};
