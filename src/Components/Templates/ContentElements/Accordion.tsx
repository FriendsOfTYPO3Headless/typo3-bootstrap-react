import React from 'react'
import {Accordion as ReactAccordion} from "react-bootstrap"

const Accordion: React.FC<{ data: any }> = (props) => {
    const {accordionItems, pi_flexform} = props.data
    const activeElement = pi_flexform.default_element ?? ''

    if (!accordionItems || accordionItems.length < 0) {
        return <></>
    }


    const accorditionItemsTemplate = accordionItems.map((accordionItem) => {
        // TODO: Add Media-Gallery
        return <ReactAccordion.Item key={accordionItem.uid} eventKey={accordionItem.uid.toString()} >
            <ReactAccordion.Header as={"h4"} id={`accordion-heading-${accordionItem.uid}`}>
                <span className="accordion-title-link-text">{accordionItem.header}</span>
            </ReactAccordion.Header>
            <ReactAccordion.Body>
                <div className={`accordion-content accordion-content-${accordionItem.mediaorient}`}>
                    <div dangerouslySetInnerHTML={{__html: accordionItem.bodytext}}/>
                </div>
            </ReactAccordion.Body>
        </ReactAccordion.Item>
    })

    return <ReactAccordion defaultActiveKey={activeElement} >
        {accorditionItemsTemplate}
    </ReactAccordion>
}

export default Accordion