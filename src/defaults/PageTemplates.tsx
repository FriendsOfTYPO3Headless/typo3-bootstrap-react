import React from "react";
import {TYPO3PagePropsInterface} from "../Components/Interfaces";
import GenericPage from "../Components/Templates/Page/GenericPage";
import Content from "../Components/Templates/Content";
import FooterContent from "../Components/Partials/Page/Structure/FooterContent";

const PageTemplates = {
    __generic:  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            main: <GenericPage pageProps={pageProps}/>
        }
    },
    default:  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border:
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </div>
                </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,

        }
    },
    simple:  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border:
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </div>
                </div>,

            main: <>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,
        }

    },
    '2_columns':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border: <div className={'row'}>
                <div className={'col'}>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </div>
            </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>

                <div className="section section-default">
                    <div className={'container'}>
                        <div className={'row'}>
                            <main className="col col-md-8 maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </main>
                            <div className="col col-md-4 subcontent-wrap ">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>

            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '2_columns_25_75':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border: <div className={'row'}>
                <div className={'col'}>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </div>
            </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'container'}>
                        <div className={'row'}>
                            <main className="col col-md-8 maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </main>
                        </div>
                        <div className="col col-md-4 subcontent-wrap">
                            <Content colPos={'1'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '2_columns_50_50':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border:
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </div>
                </div>,
            main: <>

                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'container'}>
                        <div className={'row'}>
                            <main className="col col-md-6 maincontent-wrap" role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </main>
                            <div className="col col-md-6 subcontent-wrap ">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    '3_columns':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border: <div className={'row'}>
                <div className={'col'}>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </div>
            </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'container'}>
                        <div className={'row'}>
                            <main className="col col-lg-6 maincontent-wrap " role="main">
                                <Content colPos={'0'} pageProps={pageProps}/>
                            </main>
                            <div className="col col-lg-3 subcontent-wrap ">
                                <Content colPos={'1'} pageProps={pageProps}/>
                            </div>
                            <div className="col col-lg-3 subcontent-wrap">
                                <Content colPos={'2'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>

                </div>
            </>,
            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    'special_feature':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border:
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'3'} pageProps={pageProps}/>
                    </div>
                </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>

                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>

                <div className="section section-default">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>

                <div className="section section-primary">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'30'} pageProps={pageProps}/>
                            </div>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'31'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-primary">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'32'} pageProps={pageProps}/>
                            </div>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'33'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Content colPos={'4'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>
                <div className="section section-light">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'34'} pageProps={pageProps}/>
                            </div>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'35'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-light">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'36'} pageProps={pageProps}/>
                            </div>
                            <div className="col col-md-6 section-column-half ">

                                <Content colPos={'37'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,

            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
    'special_start':  (pageProps: TYPO3PagePropsInterface) => { 
        return {
            border: <div className={'row'}>
                <div className={'col'}>
                    <Content colPos={'3'} pageProps={pageProps}/>
                </div>
            </div>,
            main: <>
                <div className={'row'}>
                    <div className={'col'}>

                        <Content colPos={'8'} pageProps={pageProps}/>
                    </div>
                </div>
                <div className="section section-default">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className="section-column-third col col-md-4 ">
                                <Content colPos={'20'} pageProps={pageProps}/>
                            </div>
                            <div className="section-column-third col col-md-4">
                                <Content colPos={'21'} pageProps={pageProps}/>
                            </div>
                            <div className="section-column-third col col-md-4">
                                <Content colPos={'22'} pageProps={pageProps}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-light">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Content colPos={'0'} pageProps={pageProps}/>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Content colPos={'9'} pageProps={pageProps}/>
                    </div>
                </div>
            </>,

            footer: <FooterContent pageProps={pageProps}/>,
        }
    },
}

export {PageTemplates};