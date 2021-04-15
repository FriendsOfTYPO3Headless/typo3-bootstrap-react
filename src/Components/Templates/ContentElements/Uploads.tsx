import React from 'react';
import getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;

const Uploads: React.FC<{ data: any }> = props => {


   //console.log(props.data.media)

    return <div className="uploads">
    <ul className="media-list">

        {Object.keys(props.data.media).map((key)=> {
            console.log(props.data)

            if( props.data.displayInformation ==2) {
                 return <li><img src={props.data.media[key].publicUrl}/>
                     <a href={props.data.media[key].publicUrl} key={key}> {props.data.media[key].properties.filename}  </a>
                 </li>
        }

            if( props.data.displayInformation ==1) {


            }
            if( props.data.displayInformation ==0) {
                 return <li>
                    <a href={props.data.media[key].publicUrl} key={key}> {props.data.media[key].properties.filename}  </a>
                 </li>
            }

        })}


        {/*

</ul>
        {Object.keys(props.data.media.properties.publicUrl).map((key) =>
            <option key={'Links-' + key} value={key}>{data.media[key]}</option>
        )}




        <a href="props.data."
               title="filename" target="_blank"><span className="uploads-filename">{props.data.media.properties.filename}</span></a> */}

        {/*

                    <div className="media-body">
                        <h4 className="media-heading">
                            <a href="{file.publicUrl}"{f:if(condition: file.properties.title, then: ' title="{file.properties.title}"')}{f:if(condition: data.target, then: ' target="{data.target}"')}>
                                <f:if condition="{data.uploads_type} == 1">
                                    <span class="uploads-fileicon">
                                        <f:switch expression="{f:format.case(value: file.properties.extension, mode: 'lower')}">
                                            <f:case value="mp3"><span class="bootstrappackageicon bootstrappackageicon-file-audio"></span></f:case>
                                            <f:case value="avi"><span class="bootstrappackageicon bootstrappackageicon-file-video"></span></f:case>
                                            <f:case value="mov"><span class="bootstrappackageicon bootstrappackageicon-file-video"></span></f:case>
                                            <f:case value="mpg"><span class="bootstrappackageicon bootstrappackageicon-file-video"></span></f:case>
                                            <f:case value="mpeg"><span class="bootstrappackageicon bootstrappackageicon-file-video"></span></f:case>
                                            <f:case value="mkv"><span class="bootstrappackageicon bootstrappackageicon-file-video"></span></f:case>
                                            <f:case value="jpg"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="gif"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="png"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="bmp"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="ai"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="eps"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="ico"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="tga"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="tif"><span class="bootstrappackageicon bootstrappackageicon-file-image"></span></f:case>
                                            <f:case value="youtube"><span class="bootstrappackageicon bootstrappackageicon-youtube"></span></f:case>
                                            <f:defaultCase><span class="bootstrappackageicon bootstrappackageicon-file"></span></f:defaultCase>
                                        </f:switch>
                                    </span>
                                </f:if>
                                <span class="uploads-filename">{f:if(condition: file.properties.title, then: file.properties.title, else: file.properties.name)}</span>
                            </a>
                            if (data.filelink_size) {
                                <span class="uploads-filesize"><f:format.bytes value="{file.properties.size}" /></span>
                            }
                        </h4>
                        if (data.uploads_description)
                            if(file.properties.description) {
                                <p className="uploads-filedescription">{file.properties.description}</p>
                            }
                        }
                    </div>
                </li>
            </f:for>
        </ul>
       }
    </div> */}
    </ul>
    </div>
}

export default Uploads;
