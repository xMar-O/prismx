import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
};
