import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import {TYPO3PageConfigInterface, TYPO3PagePropsInterface} from "./Interfaces";



const pageLayouts = {
    //TODO: implement example
    //'layout-0': (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />,

    __generic: (config, pageTemplate, contentElementLayouts, contentElementTemplates) => <>
        <__GenericLayout
            config={config}
            pageTemplate={pageTemplate}
            contentElementLayouts={contentElementLayouts}
            contentElementTemplates={contentElementTemplates}
        />
    </>

}

const pageTemplates = {
    __generic: (config, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>_generisch</div>
        }
    },
    example: (config, contentElementLayout, contentElementTemplates) => {
        return {
            main: <>...example</>
        }
    },
    default: (config, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div> .... </div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    },
    simple: (config, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>simple</div>,
            footer: <></>,
            header: <></>,
        }
    },
    '2Columns': (config, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>2Columns</div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    }
}


const contentElementLayouts = {
    __generic: '',

}


const contentElementTemplates = {
    __generic: ''
}

const TYPO3Page: React.FC<TYPO3PagePropsInterface> = props => {
    const _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);

    return <Page
        config={props.config}
        pageLayouts={_pageLayouts}
        pageTemplates={_pageTemplates}
        contentElementLayouts={contentElementLayouts}
        contentElementTemplates={contentElementTemplates}
    />
}
TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
}

export default TYPO3Page;
export {pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates};






