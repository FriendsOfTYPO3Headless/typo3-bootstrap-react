import React from 'react';

const Text : React.FC<{data: any}> = props => {
    return <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
}

export default Text;