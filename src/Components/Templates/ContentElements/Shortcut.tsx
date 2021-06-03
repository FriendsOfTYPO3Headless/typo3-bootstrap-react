import React from 'react';

const Shortcut: React.FC<{ data: any }> = props => {
        return <div dangerouslySetInnerHTML={{__html: props.data.shortcuts}} />
    }

export default Shortcut;
