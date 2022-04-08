import React from 'react'

const HeaderDate: React.FC<{
    timestamp: string;
    positionClass: string | null,
}> = props => {
//TODO: Date initialisieren, toLocaleDateString...
    const {timestamp, positionClass} = props

    const date = new Date(timestamp)
    return <p className={positionClass}>
        {date.toLocaleDateString('de-DE')}
    </p>

}
export default HeaderDate;


