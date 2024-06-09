import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles?: Array<UserProfile>;
};
