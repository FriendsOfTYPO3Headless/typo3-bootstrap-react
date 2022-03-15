import React, {useCallback} from 'react';
import {Button, Form} from "react-bootstrap";
import FormElement from "../../Partials/ContentElements/FormFramework/Elements/Element";

const FormFormFramework: React.FC<{ data: any }> = props => {

    const {form, link} = props.data;
    console.log('FORM',form)

    const submitHandler = useCallback(
        (e) => {
            e.preventDefault();
            console.log(`send POST request to ${link.href}`)
        },
        [form, link],
    );


    return <div className="formFormFramework" onSubmit={submitHandler}>
        <Form id={form.id}>
            {form.elements.map((element, index) => {
                return <FormElement element={element} key={`${form.id}-${index}`}/>
            })}
            <Button type={"submit"}>Submit</Button>
        </Form>
    </div>
}

export default FormFormFramework;