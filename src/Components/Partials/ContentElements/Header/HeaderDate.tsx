import React from 'react';

const HeaderDate: React.FC<{
    date: string;
    positionClass: string | null,
}> = props => {
//TODO: Date initialisieren, toLocaleDateString...
    return <p className={props.positionClass}>
        {props.date}
    </p>

}
export default HeaderDate;


