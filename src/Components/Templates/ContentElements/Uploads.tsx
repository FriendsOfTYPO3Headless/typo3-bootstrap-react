import React from 'react';
import getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;

const Uploads: React.FC<{ data: any }> = props => {

    return <div className="uploads">
        <ul className="media-list">

            {Object.keys(props.data.media).map((key) => {

                let description = props.data.media[key].properties.description;
                let filesize = props.data.media[key].properties.size ;
                let content;

                switch (props.data.displayInformation) {

                    case "1" :
                        content = <>
                            <a href={props.data.media[key].publicUrl}>
                                {props.data.media[key].properties.type === 'video' ?
                                    <i className="bi bi-camera-video-fill"/> :
                                    <i className="bi bi-file-image"/>}
                                {props.data.media[key].properties.filename}
                            </a>
                            {props.data.displayDescription === '1' ? description : ' '}
                            {props.data.displayFileSizeInformation === '1' ? filesize : ''}
                        </>
                        break;


                    case  "2":
                        content = <>
                            <a href={props.data.media[key].publicUrl}>
                                <iframe
                                    src={props.data.media[key].publicUrl}/>
                                {props.data.media[key].properties.filename}
                            </a>
                            {props.data.displayDescription === '1' ? description : ' '}
                            {props.data.displayFileSizeInformation === '1' ? filesize : ''}
                        </>
                        break;


                    default :
                        content =
                            <a href={props.data.media[key].publicUrl}> {props.data.media[key].properties.filename}  </a>
                    {props.data.displayDescription === '1' ? description : ' '}
                    {props.data.displayFileSizeInformation === '1' ? filesize : ''}
                }

                return <li key={key}>
                    {content}
                </li>

            })}
        </ul>
    </div>
}

export default Uploads;
