import React from "react";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import Content from "./Templates/Content";
import {TYPO3PagePropsInterface} from "./Interfaces";
import Section from './Partials/Page/Section';
import * as CE from './Templates/ContentElements';
import * as CELayouts from './Layouts/ContentElementsLayouts';
import {Col, Row, Container} from "react-bootstrap";
import FooterContent from "./Partials/Page/Structure/FooterContent";
import GenericPage from "./Templates/Page/GenericPage";


const pageLayouts = {
    //TODO: implement example
    'layout-0': (headlessData, pageTemplate, args = {}) => <div
        className={'backendlayout-' + headlessData.page.appearance.backendLayout}>
        <header>
            LOGO
        </header>
        <section>
            <Section name={'main'} pageTemplate={pageTemplate}/>
        </section>
        <footer>
            <Section name={'footer'} pageTemplate={pageTemplate}/>
        </footer>
    </div>,

    __generic: (headlessData, pageTemplate, args = {}) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>,

    Default: (headlessData, pageTemplate, args = {}) => <>
        <__GenericLayout
            headlessData={headlessData}
            pageTemplate={pageTemplate}
        />
    </>
}


const pageTemplates = {
    __generic: (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            main: <GenericPage headlessData={headlessData} contentElementLayouts={contentElementLayouts}
                               contentElementTemplates={contentElementTemplates}/>
        }
    },
    default: (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} content={headlessData.content}
                                     contentElementLayouts={contentElementLayouts}
                                     contentElementTemplates={contentElementTemplates}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,
            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,


        }
    },
    simple: (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>,

            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} content={headlessData.content}
                                     contentElementLayouts={contentElementLayouts}
                                     contentElementTemplates={contentElementTemplates}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,


        }
    },
    '2_columns': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border: <Row>
                <Col>
                    <Content colPos={'3'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                             contentElementTemplates={contentElementTemplates}/>
                </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>

                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="8" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className=" subcontent-wrap " md="4">
                                <Content colPos={'2'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>

            </>,
            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,

        }
    },
    '2_columns_25_75': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="8" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>

                            </Col>
                            <Col className=" subcontent-wrap" md="4">
                                <Content colPos={'1'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,

            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,


        }
    },
    '2_columns_50_50': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>,
            main: <>

                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="6" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className=" subcontent-wrap " md="6">
                                <Content colPos={'2'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,
            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,
        }
    },
    '3_columns': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border: <Row>
                <Col> <Content colPos={'3'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                               contentElementTemplates={contentElementTemplates}/> </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col lg="6" as="main" className=" maincontent-wrap " role="main">
                                <Content colPos={'0'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className=" subcontent-wrap " lg="3">
                                <Content colPos={'1'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className=" subcontent-wrap " lg="3">
                                <Content colPos={'2'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>

                </Row>
            </>,
            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,
        }
    },
    'special_feature': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>

                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>

                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} content={headlessData.content}
                                     contentElementLayouts={contentElementLayouts}
                                     contentElementTemplates={contentElementTemplates}/>
                        </Col>
                    </Row>
                </div>

                <div className="section section-primary">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'30'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'31'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-primary">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'32'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'33'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'4'} content={headlessData.content}
                                     contentElementLayouts={contentElementLayouts}
                                     contentElementTemplates={contentElementTemplates}/>
                        </Col>
                    </Row>
                </div>
                <div className="section section-light">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'34'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'35'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-light">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'36'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'37'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,

            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,

        }
    },
    'special_start': (headlessData, contentElementLayouts, contentElementTemplates, args = {}) => {
        return {
            border: <Row>
                <Col>
                    <Content colPos={'3'} content={headlessData.content} contentElementLayouts={contentElementLayouts}
                             contentElementTemplates={contentElementTemplates}/>
                </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>

                        <Content colPos={'8'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'20'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'21'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'22'} content={headlessData.content}
                                         contentElementLayouts={contentElementLayouts}
                                         contentElementTemplates={contentElementTemplates}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-light">
                    <Row>
                        <Col>
                            <Content colPos={'0'} content={headlessData.content}
                                     contentElementLayouts={contentElementLayouts}
                                     contentElementTemplates={contentElementTemplates}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} content={headlessData.content}
                                 contentElementLayouts={contentElementLayouts}
                                 contentElementTemplates={contentElementTemplates}/>
                    </Col>
                </Row>
            </>,

            footer: <FooterContent content={headlessData.content}
                                   contentElementLayouts={contentElementLayouts}
                                   contentElementTemplates={contentElementTemplates}/>,
        }
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
    __generic: (headlessContentData, args = {}) => {
        return <>{headlessContentData.type} has no Template</>
    },
    text: (headlessContentData, args = {}) => <CE.Text data={headlessContentData.content}/>,
    // textpic: (headlessContentData, args = {}) => <CE.Textpic data={headlessContentData.content}/>,
    // uploads: (headlessContentData, args = {}) => <CE.Uploads data={headlessContentData.content}/>,
    // textmedia: (headlessContentData, args = {}) => <CE.Textmedia data={headlessContentData.content}/>,

    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
    // shortcut: (headlessContentData, args = {}) => <CE.Shortcut data={headlessContentData.content}/>,
    // table: (headlessContentData, args = {}) => <CE.Table data={headlessContentData.content}/>,
     div: (headlessContentData, args = {}) => <CE.Div data={headlessContentData.content}/>,
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
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






