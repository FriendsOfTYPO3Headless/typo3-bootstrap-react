import React from "react";
import Element from "./Elements/Element";

const Fieldset: React.FC<{ data: any }> = (props) => {
    const {elements, identifier, label} = props.data
    console.log('elements', elements)
    const fieldSetElements = elements.map((element, index) => {
       return <Element element={element} key={`${identifier}-${element.name}-${index}`}/>
    })
    return <fieldset name={identifier} id={identifier}>
        {label && label.length > 0 && <legend>{label}</legend>}
        {fieldSetElements}
    </fieldset>
}

export default Fieldset