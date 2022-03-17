import React from "react"
import {TYPO3ContentElementBaseInterface} from "../../../../Interfaces";
import FormControl from "./FormControl";

const FormControlHidden:React.FC<TYPO3ContentElementBaseInterface> = props => {
    props.data.label = ''
    return <FormControl data={props.data} />
}

export default FormControlHidden