import React from 'react';

const Text : React.FC<{data: any}> = props => {
    console.log(props.data)
    return <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} />
}

export default Text;