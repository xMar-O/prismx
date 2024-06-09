import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  bio?: string | null;
  profilePicture?: InputJsonValue;
  userId?: string | null;
  userInteractions?: InputJsonValue;
};
