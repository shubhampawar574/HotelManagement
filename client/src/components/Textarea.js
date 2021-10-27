import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
const Textarea = ({placeholder}) => {
    return (
        <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder={placeholder} />
        </FormGroup>
    )
}

export default Textarea
