import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import Content from "./Templates/Content";
import {TYPO3PagePropsInterface} from "./Interfaces";
import Section from './Partials/Page/Section';


const pageLayouts = {
    //TODO: implement example
    'layout-0': (headlessData, pageTemplate) => <>
        <header>
            LOGO
        </header>
        <section>
            <h1>Hier ist ist eine Section</h1>
            <Section name={'main'} pageTemplate={pageTemplate}/>
        </section>
        <footer>
            <h3>Hier ist eine andere Section</h3>
            <Section name={'border'} pageTemplate={pageTemplate}/>
        </footer>
    </>,

    __generic: (headlessData, pageTemplate) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>

}

const pageTemplates = {
    __generic: (headlessData, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>_generisch</div>
        }
    },
    example: (headlessData, contentElementLayout, contentElementTemplates) => {
        return {
            main: <>...example</>
        }
    },
    default: (headlessData, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div> .... </div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    },
    simple: (headlessData, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>simple</div>,
            border: <>
                <Content colPos={'3'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                         contentElementTemplates={contentElementTemplates}/>
            </>,
        }
    },
    '2Columns': (headlessData, contentElementLayouts, contentElementTemplates) => {
        return {
            main: <div>2Columns</div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    }
}


const contentElementLayouts = {
    __generic: (props) => {
        return <div className={'contentWrapper'}>
            {props.children}
        </div>
    },

}


const contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: (headlessContentData) => <></>,
    //text: (headlessContentData) => <Text {...headlessContentData} />,


}

const TYPO3Page: React.FC<TYPO3PagePropsInterface> = props => {
    const _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);

    return <Page
        headlessData={props.headlessData}
        pageLayouts={_pageLayouts}
        pageTemplates={_pageTemplates}
        contentElementLayouts={_contentElementLayouts}
        contentElementTemplates={_contentElementTemplates}
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






