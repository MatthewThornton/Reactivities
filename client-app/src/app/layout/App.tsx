import React from "react";
import axios from "axios";
import { Header, ListItem, List, Container } from "semantic-ui-react";
import { IActivity } from "../models/activities";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [ selectedActivity, setSelectedActivity ] = React.useState<IActivity | undefined>(undefined);

  React.useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:4999/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() { 
    setSelectedActivity(undefined);
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </>
  );
}

export default App;
