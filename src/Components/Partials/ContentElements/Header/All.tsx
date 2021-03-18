import React from 'react';
import Header from "./Header";
import Subheader from "./Subheader";
import HeaderDate from "./HeaderDate";

const AllHeader: React.FC<{ data: any }> = props => {
    let content = <></>
    if (props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.header !== '' || props.data.content.date !== '') {
            content = <header className="frame-header">
                {props.data.content.header !== '' ?
                    <Header layout={props.data.content.headerLayout}
                            positionClass={props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : ''}
                            header={props.data.content.header}
                            headerLink={props.data.content.headerLink !== '' ? props.data.content.headerLink : null}
                    />
                    :
                    null}

                {props.data.content.subheader !== '' ?
                    <Subheader layout={props.data.content.headerLayout}
                               positionClass={props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : ''}
                               header={props.data.content.subheader}
                               headerLink={props.data.content.headerLink !== '' ? props.data.content.headerLink : null}
                    />
                    :
                    null}

                {props.data.content.date !== '' ?
                    <HeaderDate
                        date={props.data.content.date}
                        positionClass={props.data.content.headerPosition ? 'text-' + props.data.content.headerPosition : ''}
                    />
                    :
                    null}
            </header>
        }
    }


    return content;
}

export default AllHeader;