import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import Content from "./Templates/Content";
import {TYPO3PagePropsInterface} from "./Interfaces";
import Section from './Partials/Page/Section';
import * as CE from './Templates/ContentElements';
import * as CELayouts from './Layouts/ContentElementsLayouts';


const pageLayouts = {
    //TODO: implement example
    'layout-0': (headlessData, pageTemplate, args={}) => <>
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

    __generic: (headlessData, pageTemplate, args={}) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>
}


const pageTemplates = {
    __generic: (headlessData, contentElementLayouts, contentElementTemplates, args={}) => {
        return {
            main: <div>_generisch</div>
        }
    },
    example: (headlessData, contentElementLayout, contentElementTemplates, args={}) => {
        return {
            main: <>...example</>
        }
    },
    default: (headlessData, contentElementLayouts, contentElementTemplates, args={}) => {
        return {
            main: <div> .... </div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    },
    simple: (headlessData, contentElementLayouts, contentElementTemplates, args={}) => {
        return {
            main: <>
                <Content colPos={'8'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                         contentElementTemplates={contentElementTemplates}/>

                <div className="section section-default">
                    <Content colPos={'0'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                             contentElementTemplates={contentElementTemplates}/>
                </div>

                <Content colPos={'9'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                         contentElementTemplates={contentElementTemplates}/>

            </>,
            border: <>
                <Content colPos={'3'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                         contentElementTemplates={contentElementTemplates}/>
            </>,
        }
    },
    '2Columns': (headlessData, contentElementLayouts, contentElementTemplates, args={}) => {
        return {
            main: <div>2Columns</div>,
            footer: <footer>...</footer>,
            header: <header>...</header>
        }
    }
}


const contentElementLayouts = {
    __generic :  (props) => {
        return <CELayouts.Layout0 data={props.content}>
            {props.children}
        </CELayouts.Layout0>
    },
}



const contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: (headlessContentData, args= {}) => {
        return <>{headlessContentData.type}</>
    },
    text: (headlessContentData, args= {}) => <CE.Text data={headlessContentData.content} />,
    textpic: (headlessContentData, args= {}) => <CE.Textpic data={headlessContentData.content} />

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






