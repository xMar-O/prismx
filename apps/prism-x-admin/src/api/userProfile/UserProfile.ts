import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { UserInteraction } from "../userInteraction/UserInteraction";

export type UserProfile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  profilePicture: JsonValue;
  updatedAt: Date;
  user?: User | null;
  userInteractions?: Array<UserInteraction>;
};
