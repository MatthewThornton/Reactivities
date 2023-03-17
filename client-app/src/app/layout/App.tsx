import React from "react";
import axios from "axios";
import { Header, ListItem, List, Container } from "semantic-ui-react";
import { IActivity } from "../models/activities";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:4999/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
