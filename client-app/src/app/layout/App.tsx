import React from "react";
import axios from "axios";
import { Header, ListItem, List } from "semantic-ui-react";
import { IActivity } from "../models/activities";
import NavBar from "./NavBar";


function App() {
  const [activities, setActivities] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    axios.get<IActivity[]>("http://localhost:4999/api/activities").then((response) => {
      setActivities(response.data);
    }) 
  }, []);

  return (
    <>
      <NavBar />
      <List>
        {activities.map((activity: IActivity) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </> 
  );
}

export default App;
