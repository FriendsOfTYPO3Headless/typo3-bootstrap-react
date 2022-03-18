import React, {useState} from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"
import {Form} from "react-bootstrap"


function CSSstring(string) {
    const css_json = `{"${string
        .replace(/; /g, '", "')
        .replace(/: /g, '": "')
        .replace(";", "")}"}`;
    console.log('JSON', css_json);
    return {}
    const obj = JSON.parse(css_json);

    const keyValues = Object.keys(obj).map((key) => {
        var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
        return {[camelCased]: obj[key]};
    });
    return Object.assign({}, ...keyValues);
}


const Honeypot: React.FC<TYPO3ContentElementBaseInterface> = props => {
    const {defaultValue, identifier, label, name, properties} = props.data
    const {
        containerClassAttribute,
        elementClassAttribute,
        elementErrorClassAttribute,
        renderAsHiddenField,
        styleAttribute
    } = properties
    return <div className={containerClassAttribute}>
        {label.length > 0 && <Form.Label>{label}</Form.Label>}
        <Form.Control
            type={renderAsHiddenField.length > 0 ? 'hidden' : 'text'}
            name={name}
            className={elementClassAttribute}
            defaultValue={defaultValue}
            style={CSSstring(styleAttribute)}
        />
    </div>
}

export default Honeypot