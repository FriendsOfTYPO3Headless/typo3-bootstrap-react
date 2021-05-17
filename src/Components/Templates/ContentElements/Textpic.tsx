import React from 'react';

const Textpic: React.FC<{ data: any }> = props => {
    let content = props.data.gallery
    console.log(props.data.gallery)
    return <div className="textpic">

        {Object.keys(content).map((key) => {
let image;
let text;
            if (content.position && content.position.horizontal === 'left') {


            }
            if (content.position && content.position.horizontal === 'right') {


            }
            if (content.position && content.position.horizontal === 'center') {
                if (content.position && content.position.vertical === 'below') {

                    {Object.keys(props.data.gallery.rows).map((rowKey) => {

                        return <> {Object.keys(props.data.gallery.rows[rowKey].columns).map((columnKey) => {

                            return <img src={props.data.gallery.rows[rowKey].columns[columnKey].publicUrl}/>

                        })


                        } </>
                    })}

                    // let table =
              //      image = <>  <img src={props.data.media[key].publicUrl}/>
                //        <a href={props.data.media[key].publicUrl}> {props.data.media[key].properties.filename}  </a>
                  //  </>
                   // text = <div dangerouslySetInnerHTML={{__html: props.data.bodytext}} /> ;
                }
            }
        })
        }
    </div>
    return content;
}
export default Textpic;
