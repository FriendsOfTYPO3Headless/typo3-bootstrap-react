import React from "react";
import {Col, Row} from "react-bootstrap";
import Content from "../Content";
import {TYPO3PagePropsInterface} from "../../Interfaces";

interface gridElementInterface {
    tag?: string | any | null,
    type: string,
    children?: gridElementInterface[],
    contentColPos?: string,
    colPos: string,
    colspan: number,
}

const getGridElement = (element: gridElementInterface, pageProps: TYPO3PagePropsInterface, index: number) => {
    switch (element.type) {
        case 'row':
            const children = element.children.map((child: gridElementInterface, index: number) => {
                return getGridElement(child, pageProps, index);
            });

            return <Row as={element.tag ?? 'div'} key={index}>
                {children}
            </Row>
        case 'col':
            return <Col
                as={element.tag ?? 'div'}
                lg={element.colspan}
                md={element.colspan}
                sm={element.colspan} //TODO: raus?
                xl={element.colspan}
                key={index}
            >
                <Content colPos={element.colPos} pageProps={pageProps}/>
            </Col>

        default:
            return <></>
    }
}

const GenericPage: React.FC<{ pageProps: TYPO3PagePropsInterface }> = ({pageProps}) => {
    let content = <></>
    if (pageProps.headlessData.appearance.pageContentRows) {
        content = pageProps.headlessData.appearance.pageContentRows.map((gridElement: any, index: number) => {
            return getGridElement(gridElement, pageProps, index);
        });
    }

    return content;
}

export default GenericPage;