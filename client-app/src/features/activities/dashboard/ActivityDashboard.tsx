import React from "react";
import { Grid , List, ListItem } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";
import ActivityList from "./ActivityList";

interface IOwnProps {
    activities: IActivity[];
}

const ActivityDashboard = (props: IOwnProps) => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
            <ActivityList activities={props.activities} />
        </Grid.Column>
      </Grid>
    </>
  ); 
};
export default ActivityDashboard;
