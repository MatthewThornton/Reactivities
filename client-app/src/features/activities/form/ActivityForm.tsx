import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activities";

interface IOwnProps { 
    activity: IActivity | undefined;
    editMode: boolean;
    closeForm: () => void;
    createOrEdit: (activity: IActivity) => void;
}

const ActivityForm = ({
    activity: selectedActivity,
    editMode,
    closeForm,
    createOrEdit
}: IOwnProps) => { 

    const initialFormState: IActivity = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = React.useState<IActivity>(initialFormState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({...activity, [name]: value});
    }

    // Think through this pattern. Maybe it doesn't make sense. The hook doesn't set before the undefined return check.
    console.log("ActivityForm.tsx: selectedActivity: ", selectedActivity);
    console.log("ActivityForm.tsx: activity: ", activity);
    return (<>
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder={'Title'} value={activity.title} name={'title'} onChange={handleInputChange} />
                <Form.TextArea rows={2} placeholder={'Description'} value={activity.description} name={'description'} onChange={handleInputChange}  />
                <Form.Input placeholder="Category" value={activity.category} name={'category'} onChange={handleInputChange} /> 
                <Form.Input type="date" placeholder="Date" value={activity.date} name={'date'} onChange={handleInputChange}  />
                <Form.Input placeholder="City" value={activity.city} name={'city'} onChange={handleInputChange}  />
                <Form.Input placeholder="Venue" value={activity.venue} name={'venue'} onChange={handleInputChange}  />
                <Button floated="right" positive  type="submit" content="submit" />
                <Button 
                    floated="right" 
                    type="button" 
                    content="cancel" 
                    onClick={closeForm}
                />
            </Form>
        </Segment>
    </>)
}
export default ActivityForm;