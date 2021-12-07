import React from "react";
import {Col, Row} from "react-bootstrap";
import Content from "../Content";
import TYPO3PageContext from "../../../Context/TYPO3PageContext";

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
                <Content colPos={element.colPos} />
            </Col>

        default:
            return <></>
    }
}

const GenericPage: React.FC = () => {
    const context = React.useContext(TYPO3PageContext);
    let content = <></>
    if(context.headlessData.appearance.pageContentRows) {
        content = context.headlessData.appearance.pageContentRows.map((gridElement:any, index: number) =>  {
            return getGridElement(gridElement, context.headlessData.content, context.contentElementLayouts, context.contentElementTemplates, index);
        });
    }

    return content;
}

export default GenericPage;