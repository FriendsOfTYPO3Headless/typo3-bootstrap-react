import React from "react";
import Image from "./Type/Image";

interface IType {
    file: any
    data?: any
}

const Type: React.FC<IType> = (props) => {
    const {file} = props
    let fileType = file.properties.type
    if(!isNaN(+file.properties.type)){
        const fileExtension = file.properties.filename.split('.').pop()
        if(['jpg','png','svg'].some((type) => type === fileExtension)){
            fileType = 'image'
        }
    }

    switch (fileType) {
        case 'image':
            return <Image file={file}/>
        default:
            return <div className={"alert alert-info"}>Filetype unknown {file.properties.filename}</div>
    }
}

export default Type