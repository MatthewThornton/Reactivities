import React from "react";
import { Segment, Item, Button, Label } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";

interface IOwnProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
}

const ActivityList = (props: IOwnProps) => {
  
  return (
    <>
      <Segment>
        <Item.Group divided>
          {props.activities.map((activity: IActivity) => (
            <Item key={activity.id}>
                <Item.Content>
                    <Item.Header as="a">{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button 
                            floated="right" content="View" color="blue" 
                            onClick={() => props.selectActivity(activity.id)}
                        />
                        <Label basic content={activity.category} />
                    </Item.Extra>
                </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
};
export default ActivityList;
