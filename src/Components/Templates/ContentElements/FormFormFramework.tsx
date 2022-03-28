import React, {useCallback, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import FormElement from "../../Partials/ContentElements/FormFramework/Elements/Element";

const FormFormFramework: React.FC<{ data: any }> = props => {
    console.log('properties', props)
    const {form, link} = props.data;
    const [validated, setValidated] = useState(false);
    console.log(props.data)
    const responseElementId = form.id
    const submitHandler = useCallback(
        async (event) => {
            event.preventDefault();
            const form = event.currentTarget
            console.log('FORM', form)
            console.log('FORM Target', event.target)
            const formData = new FormData(form)
            console.log('FORM DATA', formData)
            formData.append('responseElementId', responseElementId)
            // formData.forEach(((value, key1) => {
            //     console.log(key1, value);
            // }))
            if (form.checkValidity() === false) {
                // event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true)

            const response = await fetch('https://cms.trixie.localhost' + link.href, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            })

            const result = await response.json()
            console.log('RESULT', result)


            // fetch(link.href, {
            //     method: 'POST', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: formData,
            // })
            //     .then(response => {
            //         const fre = response
            //         console.log('Response', fre.body)
            //         return fre
            //     })
            //     .then(data => {
            //         console.log('Success:', data);
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });
        },
        [form, link],
    );


    return <div className="formFormFramework" >
        <Form id={form.id} noValidate={true} validated={validated} onSubmit={submitHandler} method={'POST'} action={link.href}>
            {form.elements.map((element, index) => {
                return <FormElement element={element} key={`${form.id}-${index}`}/>
            })}
            <Button type={"submit"}>Submit</Button>
        </Form>
    </div>
}

export default FormFormFramework;