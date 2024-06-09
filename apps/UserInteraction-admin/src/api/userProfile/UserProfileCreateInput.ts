import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  bio?: string | null;
  profilePicture?: InputJsonValue;
  userId?: string | null;
  userInteractions?: InputJsonValue;
};
