import React from "react";
import { Grid , List, ListItem } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";

interface IOwnProps {
    activities: IActivity[];
}

const ActivityDashboard = ({activities}: IOwnProps) => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
            <ActivityList activities={activities} />
        </Grid.Column>
        <Grid.Column width={6}>
           <ActivityDetails activity={activities[0]}/>
        </Grid.Column>
      </Grid>
    </>
  ); 
};
export default ActivityDashboard;
