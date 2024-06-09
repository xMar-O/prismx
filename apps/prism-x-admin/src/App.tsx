import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { UserInteractionList } from "./userInteraction/UserInteractionList";
import { UserInteractionCreate } from "./userInteraction/UserInteractionCreate";
import { UserInteractionEdit } from "./userInteraction/UserInteractionEdit";
import { UserInteractionShow } from "./userInteraction/UserInteractionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PrismX"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="UserInteraction"
          list={UserInteractionList}
          edit={UserInteractionEdit}
          create={UserInteractionCreate}
          show={UserInteractionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
