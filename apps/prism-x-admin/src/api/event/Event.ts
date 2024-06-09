import { User } from "../user/User";
import { UserInteraction } from "../userInteraction/UserInteraction";

export type Event = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  userInteractions?: Array<UserInteraction>;
};
