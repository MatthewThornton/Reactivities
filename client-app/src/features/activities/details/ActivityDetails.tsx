import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";

interface IOwnProps {
  activity: IActivity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
  editMode: boolean;
}

const ActivityDetails = ({
  activity,
  cancelSelectedActivity,
  openForm,
  editMode
}: IOwnProps) => {
  return (
    <>
      <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button
              basic
              color="blue"
              content="Edit"
              onClick={() => openForm(activity.id)}
            />
            <Button
              basic
              color="grey"
              content="Cancel"
              onClick={cancelSelectedActivity}
            />
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
};
export default ActivityDetails;
