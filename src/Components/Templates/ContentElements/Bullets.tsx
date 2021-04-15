import React from 'react';

const Bullets: React.FC<{ data: any }> = props => {
console.log(props.data)
    return <div className="bullets">

        {Object.keys(props.data).map((key)=> {


                switch (props.data.bulletsType) {
                    case  "1" :
                        <ol><li>{props.data}</li></ol>;
                        break;

                    case "2":
                        break;

                    default:
                        <ul><li>{props.data}</li></ul>;
                        break;
                }


        })}
            {/* <f:if condition="{bullets}">
        <f:switch expression="{data.bullets_type}">
            <f:case "1">

                <ol class="list">
                    <f:for each="{bullets}" as="bullet">
                        <li>{bullet}</li>
                    </f:for>
                </ol>

            </f:case>
            <f:case value="2">

                <dl>
                    <f:for each="{bullets}" as="definitionListItem">
                        <f:for each="{definitionListItem}" as="termDescription" iteration="termDescriptionIterator">
                            <f:if condition="{termDescriptionIterator.isFirst}">
                                <f:then>
                                    <dt>{termDescription}</dt>
                                </f:then>
                                <f:else>
                                    <dd>{termDescription}</dd>
                                </f:else>
                            </f:if>
                        </f:for>
                    </f:for>
                </dl>

            </f:case>
            <f:defaultCase>

                <ul class="list">
                    <f:for each="{bullets}" as="bullet">
                        <li>{bullet}</li>
                    </f:for>
                </ul>

            </f:defaultCase>
        </f:switch>
    </f:if>*/
            }

    </div>
}

export default Bullets;

