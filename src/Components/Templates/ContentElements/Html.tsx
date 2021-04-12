import React from 'react';

const Html : React.FC<{data: any}> = props => {
    return <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
}

export default Html;