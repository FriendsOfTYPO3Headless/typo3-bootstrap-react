import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";

interface TYPO3PageConfig {
    page: any,
    content: any,
    navigations: any
}

interface TYPO3PageProps {
    config: TYPO3PageConfig,
    pageLayouts: any | null
    pageTemplates: any | null
    contentElementLayouts: any | null
    contentElementTemplates: any | null
}

const pageLayouts = {
    //TODO: implement example
    //'layout-0': (TYPO3PageConfig) => <__GenericLayout config={TYPO3PageConfig} />,

    __generic: (config, pageTemplate, contentElementLayouts, contentElementTemplates) => <>
        <header>
            <div className={'logo'}> ...Logo</div>
            {/*<div className={'Navigation'} config={config.navigations.navigation1}/>*/}
        </header>
        <section>
            {/*<div className={'breadcrumb'} config={config.navigations.breadcrumbs}/>*/}
            <p>MAIN</p>
            {pageTemplate.main}
            {/*<section name="main" config={config} pageTemplates={pageTemplates}/>*/}
        </section>
        <footer>
            <p>footer</p>
            {/*<div className={'Navigation'} config={config.navigations.navigation2}/>*/}
            {/*<section name="footer" config={config} pageTemplates={pageTemplates}/>*/}
        </footer>
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

const TYPO3Page: React.FC<TYPO3PageProps> = props => {
    // console.log(props.config.navigations.navigation1[0].title);
    const _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);
    //console.log(_pageLayouts);
    // console.log(_pageTemplates);
    // console.log(_contentElementLayouts);
    // console.log(_contentElementTemplates);

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
export {pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates, TYPO3PageConfig, TYPO3PageProps};






