import React from "react";
import {TYPO3PageHeadlessDataInterface} from "../../Interfaces";
import {Col, Row} from "react-bootstrap";
import Content from "../Content";

interface gridElementInterface {
    tag: string | any,
    type: string,
    children?: gridElementInterface[],
    contentColPos?: string,
    colPos: string,
    size: number,
}


const getGridElement = (element: gridElementInterface, content: any, contentElementLayouts : any, contentElementTemplates: any, index: number) => {
    switch (element.type) {
        case 'row':
            const children = element.children.map((child: gridElementInterface, index:number) => {
                return getGridElement(child, content, contentElementLayouts, contentElementTemplates, index);
            });

            return <Row as={element.tag} key={index}>
                {children}
            </Row>
        case 'col':
            return <Col
                as={element.tag}
                lg={element.size}
                md={element.size}
                sm={element.size} //TODO: raus?
                xl={element.size}
                key={index}
            >
                <Content colPos={element.colPos}
                         content={content}
                         contentElementLayouts={contentElementLayouts}
                         contentElementTemplates={contentElementTemplates} />
            </Col>

        default:
            return <></>
    }
}

const GenericPage: React.FC<{headlessData:TYPO3PageHeadlessDataInterface, contentElementLayouts : any, contentElementTemplates: any}> = props => {
    let content = <></>
    if(props.headlessData.page.appearance.pageContentRows) {
        content = props.headlessData.page.appearance.pageContentRows.map((gridElement:any, index: number) =>  {
            return getGridElement(gridElement, props.headlessData.content, props.contentElementLayouts, props.contentElementTemplates, index);
        });
    }

    return content;
}

export default GenericPage;