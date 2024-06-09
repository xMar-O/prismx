import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
};
