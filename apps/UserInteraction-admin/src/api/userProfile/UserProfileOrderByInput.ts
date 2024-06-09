import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userInteractions?: SortOrder;
};
