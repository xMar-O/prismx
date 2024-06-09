import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "userId";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.userId?.toString() || String(record.id);
};
