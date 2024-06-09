import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  events: JsonValue;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles: JsonValue;
};
