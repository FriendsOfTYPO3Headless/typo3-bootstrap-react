import React from 'react'
import {Accordion as ReactAccordion} from "react-bootstrap"

const Accordion: React.FC<{ data: any }> = (props) => {
    const {accordionItems, pi_flexform} = props.data
    const activeElement = pi_flexform.default_element ?? null


    if (!accordionItems || accordionItems.length < 0) {
        return <></>
    }


    const accorditionItemsTemplate = accordionItems.map((accordionItem, index) => {
        console.log('item', accordionItem)
        const id = `${accordionItem.pid}-${accordionItem.uid}`
        const eventKey = `#accordion-${id}`

        // TODO: Add Media-Gallery
        return <ReactAccordion.Item key={eventKey} eventKey={eventKey} className={'card'}>
            <ReactAccordion.Header as={"h4"} className={'card-header'} id={`accordion-heading-${id}`}>
                <span className="accordion-title-link-text">{accordionItem.header}</span>
            </ReactAccordion.Header>
            <ReactAccordion.Body className={'card-body'}>
                <div className={`accordion-content accordion-content-${accordionItem.mediaorient}`}>

                    <div dangerouslySetInnerHTML={{__html: accordionItem.bodytext}}/>
                </div>
            </ReactAccordion.Body>
        </ReactAccordion.Item>
    })

    return <ReactAccordion>
        {accorditionItemsTemplate}
    </ReactAccordion>
}

export default Accordion

// <f:variable name="activeElement" value="{data.pi_flexform.default_element}" />
//     <f:variable name="currentVariants" value="{variants}" />
//     <div class="accordion" id="accordion-{data.uid}">
//     <f:for each="{records}" as="record" iteration="iteration">
//     <div class="accordion-item card">
//     <div class="accordion-header card-header" id="accordion-heading-{data.uid}-{record.data.uid}">
//     <h4 class="accordion-title">
//     <a href="#accordion-{data.uid}-{record.data.uid}" class="accordion-title-link{f:if(condition: '{activeElement} == {record.data.uid}', else:' collapsed')}" data-toggle="collapse" data-parent="#accordion-{data.uid}" aria-expanded="{f:if(condition: '{activeElement} == {record.data.uid}', then: 'true', else: 'false')}" aria-controls="accordion-{data.uid}-{record.data.uid}">
//     <span class="accordion-title-link-text">{record.data.header}</span>
// <span class="accordion-title-link-state"></span>
// </a>
// </h4>
// </div>
// <div id="accordion-{data.uid}-{record.data.uid}" class="accordion-collapse collapse{f:if(condition: '{activeElement} == {record.data.uid}', then: ' show')}" aria-labelledby="accordion-heading-{data.uid}-{record.data.uid}" data-parent="#accordion-{data.uid}">
//     <div class="accordion-body card-body">
//         <div class="accordion-content accordion-content-{record.data.mediaorient}">
//             <f:if condition="{record.files}">
//                 <div class="accordion-content-item accordion-content-media">
//                     <f:variable name="imageConfig">{settings.responsiveimages.contentelements.accordion.{record.data.mediaorient}}</f:variable>
//                     <bk2k:data.imageVariants as="variants" variants="{currentVariants}" multiplier="{imageConfig.multiplier}" gutters="{imageConfig.gutters}" corrections="{imageConfig.corrections}" />
//                     <f:render partial="Media/Gallery" arguments="{files: record.files, data: record.data, settings: settings, variants: variants}" />
//                 </div>
//             </f:if>
//             <div class="accordion-content-item accordion-content-text">
//                 <f:format.html>{record.data.bodytext}</f:format.html>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// </f:for>
// </div>
// </f:if>