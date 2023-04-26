import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailedInfo";
import ActivityDetailsChat from "./ActivityDetailedChat";
import ActivityDetailsSideBar from "./ActivityDetailedSidebar";

const ActivityDetails = () => {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
      if (id) loadActivity(id);
  }, [id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
      <Grid>
        <Grid.Column width="10">
            <ActivityDetailsHeader activity={activity} />
            <ActivityDetailsInfo  activity={activity} />       
            <ActivityDetailsChat />     
        </Grid.Column>
        <Grid.Column width="6">
            <ActivityDetailsSideBar />
        </Grid.Column>
      </Grid>
    )
};
export default observer(ActivityDetails);
