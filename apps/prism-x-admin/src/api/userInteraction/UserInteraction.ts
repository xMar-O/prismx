import { Event } from "../event/Event";
import { UserProfile } from "../userProfile/UserProfile";

export type UserInteraction = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  interactionType?: "Option1" | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
