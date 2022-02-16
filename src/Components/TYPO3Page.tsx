import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import Content from "./Templates/Content";
import {TYPO3PageHeadlessDataInterface, TYPO3PagePropsInterface} from "./Interfaces";
import Section from './Partials/Page/Section';
import * as CE from './Templates/ContentElements';
import * as CELayouts from './Layouts/ContentElementsLayouts';
import {Col, Row, Container} from "react-bootstrap";
import FooterContent from "./Partials/Page/Structure/FooterContent";
import GenericPage from "./Templates/Page/GenericPage";
import TYPO3PageContext from "../Context/TYPO3PageContext";
import FormFormFramework from "./Templates/ContentElements/FormFormFramework";


const pageLayouts = {
    //TODO: implement example
    'layout-0': (headlessData, pageTemplate) => <div
        className={'backendlayout-' + headlessData.appearance.backendLayout}>
        <header>

        </header>
        <section>
            <Section name={'main'} pageTemplate={pageTemplate}/>
        </section>
        <footer>
            <Section name={'footer'} pageTemplate={pageTemplate}/>
        </footer>
    </div>,

    __generic: (headlessData, pageTemplate) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>,

    Default: (headlessData, pageTemplate) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>
}

const pageTemplates = {
    __generic: {
        main: <GenericPage/>
    },
    default: {
        border:
            <Row>
                <Col>
                    <Content colPos={'3'}/>
                </Col>
            </Row>,
        main: <>
            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Row>
                    <Col>
                        <Content colPos={'0'}/>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,
        footer: <FooterContent/>,


    },
    simple: {
        border:
            <Row>
                <Col>
                    <Content colPos={'3'}/>
                </Col>
            </Row>,

        main: <>
            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Row>
                    <Col>
                        <Content colPos={'0'}/>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,


    },
    '2_columns': {
        border: <Row>
            <Col>
                <Content colPos={'3'}/>
            </Col>
        </Row>,
        main: <>
            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>

            <div className="section section-default">
                <Container>
                    <Row>
                        <Col md="8" as="main" className=" maincontent-wrap" role="main">
                            <Content colPos={'0'}/>
                        </Col>
                        <Col className=" subcontent-wrap " md="4">
                            <Content colPos={'2'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>

        </>,
        footer: <FooterContent/>,

    },
    '2_columns_25_75': {
        border:
            <Row>
                <Col>
                    <Content colPos={'3'}/>
                </Col>
            </Row>,
        main: <>
            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Container>
                    <Row>
                        <Col md="8" as="main" className=" maincontent-wrap" role="main">
                            <Content colPos={'0'}/>
                        </Col>
                        <Col className=" subcontent-wrap" md="4">
                            <Content colPos={'1'}/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,
        footer: <FooterContent/>,
    },
    '2_columns_50_50': {
        border:
            <Row>
                <Col>
                    <Content colPos={'3'}/>
                </Col>
            </Row>,
        main: <>

            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Container>
                    <Row>
                        <Col md="6" as="main" className=" maincontent-wrap" role="main">
                            <Content colPos={'0'}/>
                        </Col>
                        <Col className=" subcontent-wrap " md="6">
                            <Content colPos={'2'}/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,
        footer: <FooterContent/>,
    },
    '3_columns': {
        border: <Row>
            <Col>
                <Content colPos={'3'}/>
            </Col>
        </Row>,
        main: <>
            <Row>
                <Col>
                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Container>
                    <Row>
                        <Col lg="6" as="main" className=" maincontent-wrap " role="main">
                            <Content colPos={'0'}/>
                        </Col>
                        <Col className=" subcontent-wrap " lg="3">
                            <Content colPos={'1'}/>
                        </Col>
                        <Col className=" subcontent-wrap " lg="3">
                            <Content colPos={'2'}/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>

            </Row>
        </>,
        footer: <FooterContent/>,
    },
    'special_feature': {
        border:
            <Row>
                <Col>
                    <Content colPos={'3'}/>
                </Col>
            </Row>,
        main: <>
            <Row>
                <Col>

                    <Content colPos={'8'}/>
                </Col>
            </Row>

            <div className="section section-default">
                <Row>
                    <Col>
                        <Content colPos={'0'}/>
                    </Col>
                </Row>
            </div>

            <div className="section section-primary">
                <Container>
                    <Row>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'30'}/>
                        </Col>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'31'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-primary">
                <Container>
                    <Row>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'32'}/>
                        </Col>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'33'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-default">
                <Row>
                    <Col>
                        <Content colPos={'4'}/>
                    </Col>
                </Row>
            </div>
            <div className="section section-light">
                <Container>
                    <Row>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'34'}/>
                        </Col>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'35'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-light">
                <Container>
                    <Row>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'36'}/>
                        </Col>
                        <Col className="section-column-half " md="6">

                            <Content colPos={'37'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,

        footer: <FooterContent/>,

    },
    'special_start': {
        border: <Row>
            <Col>
                <Content colPos={'3'}/>
            </Col>
        </Row>,
        main: <>
            <Row>
                <Col>

                    <Content colPos={'8'}/>
                </Col>
            </Row>
            <div className="section section-default">
                <Container>
                    <Row>
                        <Col className="section-column-third " md="4">
                            <Content colPos={'20'}/>
                        </Col>
                        <Col className="section-column-third " md="4">
                            <Content colPos={'21'}/>
                        </Col>
                        <Col className="section-column-third " md="4">
                            <Content colPos={'22'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-light">
                <Row>
                    <Col>
                        <Content colPos={'0'}/>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Content colPos={'9'}/>
                </Col>
            </Row>
        </>,

        footer: <FooterContent/>,
    },
}

const contentElementLayouts = {
    __generic: (props) => {
        return <CELayouts.Layout0 data={props.content}>
            {props.children}
        </CELayouts.Layout0>
    },
}

const contentElementTemplates = {
    //Resources/Private/Templates/ContentElements/**
    __generic: (headlessContentData) => {
        return <>{headlessContentData.type} has no Template</>
    },
    text: (headlessContentData) => <CE.Text data={headlessContentData.content}/>,
    html: (headlessContentData) => <CE.Html data={headlessContentData.content}/>,
    textpic: (headlessContentData) => <CE.Textpic data={headlessContentData.content}/>,
    image: (headlessContentData) => <CE.Image data={headlessContentData.content}/>,
    shortcut: (headlessContentData) => <CE.Shortcut data={headlessContentData.content}/>,
    div: (headlessContentData) => <CE.Div data={headlessContentData.content}/>,
    uploads: (headlessContentData) => <CE.Uploads data={headlessContentData.content}/>,
    form_formframework: (headlessContentData) => <CE.FormFormFramework data={headlessContentData.content}/>

    // table: (headlessContentData, args = {}) => <CE.Table data={headlessContentData.content}/>,
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
    // textmedia: (headlessContentData, args = {}) => <CE.Textmedia data={headlessContentData.content}/>,
    //imageModal: (headlessContentData, args = {}) => <CE.ImageModal data={headlessContentData.content}/>,
    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
}


const TYPO3Page: React.FC<TYPO3PagePropsInterface> = props => {
    const _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);

    return <TYPO3PageContext.Provider value={{
        headlessData: props.headlessData,
        pageLayouts: _pageLayouts,
        pageTemplates: _pageTemplates,
        contentElementLayouts: _contentElementLayouts,
        contentElementTemplates: _contentElementTemplates,
        additionalParams: props.additionalParams,
    }}>
        <Page/>
    </TYPO3PageContext.Provider>
}

TYPO3Page.defaultProps = {
    pageLayouts: null,
    pageTemplates: null,
    contentElementLayouts: null,
    contentElementTemplates: null,
    additionalParams: null,
}

export default React.memo(TYPO3Page);
export {pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates, TYPO3PageContext};


