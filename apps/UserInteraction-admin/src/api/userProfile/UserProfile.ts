import { JsonValue } from "type-fest";

export type UserProfile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  profilePicture: JsonValue;
  updatedAt: Date;
  userId: string | null;
  userInteractions: JsonValue;
};
