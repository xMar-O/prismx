import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserInteractionUpdateManyWithoutUserProfilesInput } from "./UserInteractionUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  bio?: string | null;
  profilePicture?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  userInteractions?: UserInteractionUpdateManyWithoutUserProfilesInput;
};
