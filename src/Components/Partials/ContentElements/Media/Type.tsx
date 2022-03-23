import React from "react";
import Image from "./Type/Image";
import {Alert} from "react-bootstrap";

interface IType {
    file: any
    data: any
}

export const Type: React.FC<IType> = (props) => {
    const {file, data} = props
    let fileType = file.properties.type
    if(!isNaN(+file.properties.type)){
        const fileExtension = file.properties.filename.split('.').pop()
        if(['jpg','png'].some((type) => type === fileExtension)){
            fileType = 'image'
        }
    }

    switch (fileType) {
        case 'image':
            return <Image file={file}/>
        default:
            return <Alert variant={"info"}>Filetype unknown {file.properties.filename}</Alert>
    }
}

export default Type