import React, {useState} from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces"
import {Form} from "react-bootstrap"


function CSSstring(string) {
    console.log('JSON', string);
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
    const [value, SetValue] = useState(defaultValue ?? '')
    return <div className={containerClassAttribute}>
        <Form.Control
            type={renderAsHiddenField.length > 0 ? 'hidden' : 'text'}
            name={name}
            value={value}
            className={elementClassAttribute}
            style={CSSstring(styleAttribute)}
            onChange={(e) => SetValue(e.target.value)}
        />
    </div>
}

export default Honeypot