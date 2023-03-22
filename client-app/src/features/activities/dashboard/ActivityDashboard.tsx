import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface IOwnProps {
  activities: IActivity[];
  selectedActivity: IActivity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: IActivity) => void;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit
}: IOwnProps) => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectedActivity={cancelSelectActivity}
              openForm={openForm}
              editMode={editMode}
            />
          )}
          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              editMode={editMode}
              closeForm={closeForm}
              createOrEdit={createOrEdit}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
};
export default ActivityDashboard;
