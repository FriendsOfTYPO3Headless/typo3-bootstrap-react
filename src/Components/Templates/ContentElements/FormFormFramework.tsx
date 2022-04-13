import React, {useCallback, useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import FormElement from "../../Partials/ContentElements/FormFramework/Elements/Element";
import AllHeader from "../../Partials/ContentElements/Header/All";

const FormFormFramework: React.FC<{ data: any }> = props => {
    const {form, link} = props.data;
    const [validated, setValidated] = useState(false);
    const formRef = useRef<HTMLFormElement>();
    const responseElementId = form.id
    const submitHandler = useCallback(
        async (event) => {
            event.preventDefault();
            if (formRef) {

                const formElement = formRef.current;
                if (formElement) {
                    const formData = new FormData(formElement)

                    // formData.append('responseElementId', responseElementId)
                    // formData.append('responseElementRecursive', "1")
                    // formData.append('form valid', (formElement.checkValidity()? '1' : '0'))
                    if (formElement.checkValidity() === false) {
                        event.stopPropagation();
                    } else {

                        fetch(`https://cms.trixie.localhost${link.href}`, {
                            method: 'POST', // or 'PUT'
                           // headers: {'Content-Type': 'multipart/form-data'},
                            body: formData,
                        }).then(response => response.json())
                          .then(data => {
                              console.log(data)
                              console.log(data.content.colPos0['0'].content.form.api.actionAfterSuccess)
                          });

                        // const result = await response.json()
                        // console.log('RESULT', result)
                    }

                    setValidated(true)
                }

            }

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


    return <div className="formFormFramework">
        {/*<AllHeader data={props.data}/>*/}
        <Form id={form.id} noValidate={true} validated={validated} onSubmit={submitHandler} method={'POST'}
              action={link.href} ref={formRef}>
            {form.elements.map((element, index) => {
                return <FormElement element={element} key={`${form.id}-${index}`}/>
            })}
            <Form.Control
                type={'hidden'}
                name={'responseElementId'}
                defaultValue={form.id}
            />
            <Button type={"submit"}>Submit</Button>
        </Form>
    </div>
}

export default FormFormFramework;