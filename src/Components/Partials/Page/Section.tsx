import React from 'react';

const section: React.FC<{ name: string, pageTemplate: any }> = props => {

    if (props.pageTemplate.hasOwnProperty(props.name)) {
        return props.pageTemplate[props.name];
    }
    return <></>
}

export default section;