import { observer } from "mobx-react-lite";
import React from "react";
import { Segment, Item, Button, Label } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activitiy";
import { useStore } from "../../../app/stores/store";

const ActivityList = () => {
  const [ target, setTarget ] = React.useState('');
  const { activityStore } = useStore();
  const { loading, deleteActivity} = activityStore;

  function handleActivityDelete(e: React.SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <>
      <Segment>
        <Item.Group divided>
          {activityStore.activities.map((activity: IActivity) => (
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
                            onClick={() => activityStore.selectActivity(activity.id)}
                        />
                        <Button   
                            name={activity.id}
                            floated="right" content="Delete" color="red" 
                            onClick={(e) => handleActivityDelete(e, activity.id)}
                            loading={loading && target === activity.id}
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
export default observer(ActivityList);
