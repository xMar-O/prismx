import { Event } from "../event/Event";

export type UserInteraction = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  interactionType?: "Option1" | null;
  updatedAt: Date;
  userProfileId: string | null;
};
