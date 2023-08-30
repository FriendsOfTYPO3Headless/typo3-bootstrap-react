import React from 'react'
import {TYPO3BootstrapContentElementBaseInterface} from "../../Interfaces"
import AllHeader from "../../Partials/ContentElements/Header/All";

const Textmedia: React.FC<TYPO3BootstrapContentElementBaseInterface> = props => {

    let textmediaClassName;
    if (props.data.content.gallery.position.horizontal === 'left' || props.data.content.gallery.position.horizontal === 'right') {
        textmediaClassName = props.data.content.gallery.position.horizontal;
    }
    if (props.data.content.gallery.position.horizontal === 'center') {
        textmediaClassName = props.data.content.gallery.position.vertical;
    }
    return <div className={"row textmedia textmedia-" + textmediaClassName}>
        <div
            className={`textmedia-item textmedia-gallery col col-md-${textmediaClassName === props.data.content.gallery.position.vertical ? 'auto' : '6'}`}>
            <div className={'row'}>
                {Object.keys(props.data.content.gallery.rows).map((rowKey) => {
                    return Object.keys(props.data.content.gallery.rows[rowKey].columns).map((columnKey) => {
                        switch (props.data.content.gallery.rows[rowKey].columns[columnKey].properties.mimeType) {
                            case 'video/youtube':
                                return <div
                                    className={"col gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                    <iframe
                                        src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                        className="embed-responsive-item w-100"/>
                                    {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                </div>
                            case 'image/jpeg':
                                return <div
                                    className={"col gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                    <img
                                        src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                        className="embed-responsive-item"
                                        alt={props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title}/>
                                    {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                </div>
                            case 'image/svg+xml':
                                return <div
                                    className={"col gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                    <img
                                        src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}
                                        className="embed-responsive-item"
                                        alt={props.data.content.gallery.rows[rowKey].columns[columnKey].properties.title}/>
                                    {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                </div>
                            case 'video/mp4':
                                return <div
                                    className={"col gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                    <video controls>
                                        <source type="video/mp4"
                                                src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    </video>
                                    {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                </div>
                            case 'video/vimeo':
                                return <div
                                    className={"col gallery-item  gallery-item-size-" + props.data.content.gallery.count.columns}>
                                    <video controls>
                                        <source type="video/mp4"
                                                src={props.data.content.gallery.rows[rowKey].columns[columnKey].publicUrl}/>
                                    </video>
                                    {props.data.content.gallery.rows[rowKey].columns[columnKey].properties.description}
                                </div>
                            default :
                                return <></>
                        }
                    })
                })}
            </div>
        </div>

        <div className="col textmedia-item textmedia-text">
            <AllHeader data={props.data}/>
            <div dangerouslySetInnerHTML={{__html: props.data.content.bodytext}}/>
            {props.children}
        </div>
    </div>
}

export default Textmedia;


