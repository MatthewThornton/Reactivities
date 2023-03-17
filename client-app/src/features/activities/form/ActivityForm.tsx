import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";


const ActivityForm = () => { 
    return (<>
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title" />
                <Form.TextArea rows={2} placeholder="Description" />
                <Form.Input placeholder="Category" />
                <Form.Input type="date" placeholder="Date" />
                <Form.Input placeholder="City" />
                <Form.Input placeholder="Venue" />
                <Button floated="right" positive  type="submit" content="submit" />
                <Button floated="right" type="button" content="cancel" />
            </Form>
        </Segment>
    </>)
}
export default ActivityForm;