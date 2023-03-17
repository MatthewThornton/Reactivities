import React from "react";
import { Grid, List, ListItem } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface IOwnProps {
  activities: IActivity[];
  selectedActivity: IActivity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}: IOwnProps) => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <ActivityList activities={activities} selectActivity={selectActivity} />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetails activity={selectedActivity} cancelSelectedActivity={cancelSelectActivity} />
          <ActivityForm />
        </Grid.Column>
      </Grid>
    </>
  );
};
export default ActivityDashboard;
