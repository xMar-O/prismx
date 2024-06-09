import { UserInteraction as TUserInteraction } from "../api/userInteraction/UserInteraction";

export const USERINTERACTION_TITLE_FIELD = "userProfileId";

export const UserInteractionTitle = (record: TUserInteraction): string => {
  return record.userProfileId?.toString() || String(record.id);
};
