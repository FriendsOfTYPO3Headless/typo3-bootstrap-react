import React from 'react'
import {Col, Row} from "react-bootstrap"
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All"

const Uploads: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {
    return <>
        <AllHeader data={props.data}/>
        <div className="uploads">
            <ul className="media-list filelink-list">
                {Object.keys(props.data.content.media).map((key) => {

                    const description = props.data.content.displayDescription === '1' ?
                        <p className={'filelink-filedescription'}>{props.data.content.media[key].properties.description}</p> : null

                    const filesize = props.data.content.displayFileSizeInformation === '1' ?
                        <span
                            className={'filelink-filesize ms-2 small'}>{props.data.content.media[key].properties.size}</span> : null;

                    let title = props.data.content.media[key].properties.title;
                    if (title === null || title === '') {
                        title = props.data.content.media[key].properties.filename;
                    }

                    const heading = (contentBefore = null) => <span className={'title'}>
                    <h5 className={'filelink-heading '}>
                        <a href={props.data.content.media[key].publicUrl}>
                            {contentBefore}
                            {title}
                        </a>
                        {filesize}
                    </h5>
                </span>

                    let content;

                    switch (props.data.content.displayInformation) {
                        case "1" :
                            content = <>
                                {heading(props.data.content.media[key].properties.type === 'video' ?
                                    <i className="bi bi-camera-video-fill me-2"/> :
                                    <i className="bi bi-file-image me-2"/>
                                )}
                                {description}
                            </>
                            break;
                        case  "2":
                            let media = null;
                            switch (props.data.content.media[key].properties.type) {
                                case 'video':
                                    media = <iframe src={props.data.content.media[key].publicUrl} className={'mw-100'}/>
                                    break;
                                //TODO: add preview for application/*
                                case 'application':
                                    if (props.data.content.media[key].properties.mimeType === 'application/pdf') {
                                        media =
                                            <iframe src={props.data.content.media[key].publicUrl} className={'mw-100'}/>
                                    }
                                    break;
                                default:
                                    media =
                                        <img src={props.data.content.media[key].publicUrl} alt={title}
                                             className={'img-fluid'}/>
                            }

                            content = <Row>
                                <Col className={'filelink-media'} xs={3} sm={3} md={3} lg={2} xl={2} xxl={2}>
                                    {media}
                                </Col>
                                <Col className={'filelink-body'}>
                                    {heading()}
                                    {description}
                                </Col>
                            </Row>
                            break;

                        default:
                            content = <>
                                {heading()}
                                {description}
                            </>
                    }

                    return <li className={'filelink-item mb-2'} key={key}>{content}</li>
                })}
            </ul>
        </div>
        {props.children}
    </>
}

export default Uploads;
