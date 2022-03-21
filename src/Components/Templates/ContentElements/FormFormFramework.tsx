import React, {useCallback, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import FormElement from "../../Partials/ContentElements/FormFramework/Elements/Element";

const FormFormFramework: React.FC<{ data: any }> = props => {

    const {form, link} = props.data;
    const [validated, setValidated] = useState(false);

    const submitHandler = useCallback(
        (event) => {
            const form = event.currentTarget
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true)
            console.log(`send POST request to ${link.href}`)
        },
        [form, link],
    );


    return <div className="formFormFramework" >
        <Form id={form.id} noValidate={false} validated={validated} onSubmit={submitHandler}>
            {form.elements.map((element, index) => {
                return <FormElement element={element} key={`${form.id}-${index}`}/>
            })}
            <Button type={"submit"}>Submit</Button>
        </Form>
    </div>
}

export default FormFormFramework;