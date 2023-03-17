import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, ListItem, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4999/api/activities").then((response) => {
      setActivities(response.data);
    }) 
  }, []);

  return (
    <>
      <Header as="h2" icon="users" content="Reactivites" />
      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </> 
  );
}

export default App;
