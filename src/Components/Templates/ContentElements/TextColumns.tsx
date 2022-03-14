import React from "react";

const TextColumns: React.FC<{ data: any }> = (props) => {
    const {bodytext} = props.data

    return <div className="text-column">
        <div dangerouslySetInnerHTML={{__html: bodytext}}/>
    </div>
}

export default TextColumns