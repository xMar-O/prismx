import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  events?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  userProfiles?: InputJsonValue;
};
