import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const UserInteractionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserInteractions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="interactionType" source="interactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserProfile ID" source="userProfileId" />
      </Datagrid>
    </List>
  );
};
