import React from 'react';
import Header from "./Header";

const AllHeader: React.FC<{ data: any }> = props => {
// console.log(props);
    // console.log(props.data);
    // <f:if condition="{data.header_layout} != 100">
    //     <f:if condition="{data.header} || {data.subheader} || {data.date}">
    //         <header className="frame-header">
    //             <f:render partial="Header/Header" arguments="{
    //             header: data.header,
    //             layout: data.header_layout,
    //             class: settings.header.class,
    //             positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}',
    //             link: data.header_link,
    //             default: settings.header.defaultHeaderType}"/>
    //             <f:render partial="Header/SubHeader" arguments="{
    //             subheader: data.subheader,
    //             layout: data.header_layout,
    //             class: settings.subheader.class,
    //             positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}',
    //             default: settings.header.defaultHeaderType}"/>
    //             <f:render partial="Header/Date" arguments="{
    //             date: data.date,
    //             format: settings.header.date.format,
    //             positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}'}"/>
    //         </header>
    //     </f:if>
    // </f:if>

    let content = <></>
    if (props.data.content.headerLayout !== 100) {
        if (props.data.content.header !== '' || props.data.content.header !== '' || props.data.content.date !== '') {
            content = <header className="frame-header">
                {props.data.content.header !== '' ?
                    <Header layout={props.data.content.headerLayout}
                            positionClass={props.data.headerPosition ? 'text-' + props.data.content.headerPosition : null}
                            header={props.data.content.header}
                            headerLink={props.data.content.headerLink !== '' ? props.data.content.headerLink : null}
                    />
                    :
                    null}
                {/*<f:render partial="Header/Header" arguments="{*/}
                {/*             header: data.header,*/}
                {/*             layout: data.header_layout,*/}
                {/*             class: settings.header.class,*/}
                {/*             positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}',*/}
                {/*             link: data.header_link,*/}
                {/*             default: settings.header.defaultHeaderType}"/>*/}

                {/*<f:render partial="Header/SubHeader" arguments="{*/}
                {/*subheader: data.subheader,*/}
                {/*layout: data.header_layout,*/}
                {/*class: settings.subheader.class,*/}
                {/*positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}',*/}
                {/*default: settings.header.defaultHeaderType}"/>*/}

                {/*<f:render partial="Header/Date" arguments="{*/}
                {/*date: data.date,*/}
                {/*format: settings.header.date.format,*/}
                {/*positionClass: '{f:if(condition: data.header_position, then: \'text-{data.header_position}\')}'}"/>*/}

            </header>
        }
    }


    return content;
}

export default AllHeader;