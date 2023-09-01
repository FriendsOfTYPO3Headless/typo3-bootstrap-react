import React from "react";
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
            return <div key={index} className={'row'}>
                {element.children.map((child: gridElementInterface, index: number) => {
                    return getGridElement(child, pageProps, index);
                })}
            </div>
        case 'col':
            return <div key={index} className={`col col-lg${element.colspan} col-md-${element.colspan} col-sm-${element.colspan} col-xl=%{element.colspan}`}>
                <Content colPos={element.colPos} pageProps={pageProps}/>
            </div>

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