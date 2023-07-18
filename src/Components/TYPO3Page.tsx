import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import __GenericLayout from "./Layouts/Page/__GenericLayout";
import Page from "./Templates/Page";
import Content from "./Templates/Content";
import {TYPO3PagePropsInterface} from "./Interfaces";
import Section from './Partials/Page/Section';
import * as CE from './Templates/ContentElements';
import * as CELayouts from './Layouts/ContentElementsLayouts';
import FooterContent from "./Partials/Page/Structure/FooterContent";
import GenericPage from "./Templates/Page/GenericPage";

const pageLayouts = {
    //TODO: implement example
    'layout-0': (pageProps, pageTemplate) => <div
        className={'backendlayout-' + pageProps.headlessData.appearance.backendLayout}>
        <header>

        </header>
        <section>
            <Section name={'main'} pageTemplate={pageTemplate} pageProps={pageProps}/>
        </section>
        <footer>
            <Section name={'footer'} pageTemplate={pageTemplate} pageProps={pageProps}/>
        </footer>
    </div>,

    __generic: (pageProps, pageTemplate) => <>
        <__GenericLayout
            pageProps={pageProps}
            pageTemplate={pageTemplate}
        />
    </>,

    Default: (pageProps, pageTemplate) => <>
        <__GenericLayout
            pageProps={pageProps}
            pageTemplate={pageTemplate}
        />
    </>
}

const pageTemplates = {
    __generic: (pageProps: TYPO3PagePropsInterface) => {
        return {
            main: <GenericPage pageProps={pageProps}/>
        }
    },
    default: (pageProps: TYPO3PagePropsInterface) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,

        }
    },
    simple: (pageProps: TYPO3PagePropsInterface) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </Col>
                </Row>,

            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,
        }

    },
    '2_columns': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border: <Row>
                <Col>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>

                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="8" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </Col>
                            <Col className=" subcontent-wrap " md="4">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>

            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '2_columns_25_75': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="8" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </Col>
                            <Col className=" subcontent-wrap" md="4">
                                <Content colPos={'1'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '2_columns_50_50': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </Col>
                </Row>,
            main: <>

                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col md="6" as="main" className=" maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </Col>
                            <Col className=" subcontent-wrap " md="6">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '3_columns': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border: <Row>
                <Col>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col lg="6" as="main" className=" maincontent-wrap " role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </Col>
                            <Col className=" subcontent-wrap " lg="3">
                                <Content colPos={'1'} pageProps={pageProps}/>
                            </Col>
                            <Col className=" subcontent-wrap " lg="3">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>

                </Row>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    'special_feature': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border:
                <Row>
                    <Col>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </Col>
                </Row>,
            main: <>
                <Row>
                    <Col>

                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>

                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </Col>
                    </Row>
                </div>

                <div className="section section-primary">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'30'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'31'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-primary">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'32'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'33'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-default">
                    <Row>
                        <Col>
                            <Content colPos={'4'} pageProps={pageProps}/>
                        </Col>
                    </Row>
                </div>
                <div className="section section-light">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'34'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'35'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-light">
                    <Container>
                        <Row>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'36'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-half " md="6">

                                <Content colPos={'37'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,

            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    'special_start': (pageProps: TYPO3PagePropsInterface) => {
        return {
            border: <Row>
                <Col>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </Col>
            </Row>,
            main: <>
                <Row>
                    <Col>

                        <Content colPos={'8'} pageProps={pageProps}/>
                    </Col>
                </Row>
                <div className="section section-default">
                    <Container>
                        <Row>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'20'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'21'} pageProps={pageProps}/>
                            </Col>
                            <Col className="section-column-third " md="4">
                                <Content colPos={'22'} pageProps={pageProps}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-light">
                    <Row>
                        <Col>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </Col>
                </Row>
            </>,

            footer: <FooterContent pageProps={pageProps}/>,
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
    __generic: (headlessContentData, pageProps) => {
        return <>{headlessContentData.type} has no Template</>
    },
    text: (headlessContentData, pageProps) => <CE.Text data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    html: (headlessContentData, pageProps) => <CE.Html data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    textpic: (headlessContentData, pageProps) => <CE.Textpic data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    image: (headlessContentData, pageProps) => <CE.Image data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    shortcut: (headlessContentData, pageProps) => <CE.Shortcut data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    div: (headlessContentData, pageProps) => <CE.Div data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    uploads: (headlessContentData, pageProps) => <CE.Uploads data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    accordion: (headlessContentData, pageProps) => <CE.Accordion data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    gallery: (headlessContentData, pageProps) => <CE.Gallery data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    textmedia: (headlessContentData, pageProps) => <CE.Textmedia data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    card_group: (headlessContentData, pageProps) => <CE.CardGroup data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    textcolumn: (headlessContentData, pageProps) => <CE.TextColumns data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    quote: (headlessContentData, pageProps) => <CE.Quote data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    header: (headlessContentData, pageProps) => <CE.Header data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    carousel: (headlessContentData, pageProps) => <CE.Carousel data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    menu_card_list: (headlessContentData, pageProps) => <CE.MenuCardList data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    menu_card_dir: (headlessContentData, pageProps) => <CE.MenuCardDir data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    menu_thumbnail_dir: (headlessContentData, pageProps) => <CE.MenuThumbnailBase data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    menu_thumbnail_list: (headlessContentData, pageProps) => <CE.MenuThumbnailBase data={headlessContentData} children={headlessContentData.children} pageProps={pageProps}/>,
    // table: (headlessContentData, args = {}) => <CE.Table data={headlessContentData.content}/>,
    // menu_sitemap: (headlessContentData, args = {}) => <CE.MenuSitemap data={headlessContentData.content}/>
    //imageModal: (headlessContentData, args = {}) => <CE.ImageModal data={headlessContentData.content}/>,
    // bullets: (headlessContentData, args = {}) => <CE.Bullets data={headlessContentData.content}/>,
    // image: (headlessContentData, args = {}) => <CE.Image data={headlessContentData.content}/>,
}


const TYPO3Page: React.FC<TYPO3PagePropsInterface> = props => {
    const _pageLayouts = Object.assign({}, pageLayouts, props.pageLayouts);
    const _pageTemplates = Object.assign({}, pageTemplates, props.pageTemplates);
    const _contentElementLayouts = Object.assign({}, contentElementLayouts, props.contentElementLayouts);
    const _contentElementTemplates = Object.assign({}, contentElementTemplates, props.contentElementTemplates);

    return <Page pageProps={{
        headlessData: props.headlessData,
        pageLayouts: _pageLayouts,
        pageTemplates: _pageTemplates,
        contentElementLayouts: _contentElementLayouts,
        contentElementTemplates: _contentElementTemplates,
        additionalParams: props.additionalParams,
    }}/>
}



export default React.memo(TYPO3Page);
export {pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates};


