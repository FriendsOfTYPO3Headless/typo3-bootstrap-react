import React from "react";
import { TYPO3PagePropsInterface } from "./Interfaces";
declare const pageLayouts: {
    'layout-0': (pageProps: any, pageTemplate: any) => React.JSX.Element;
    __generic: (pageProps: any, pageTemplate: any) => React.JSX.Element;
    Default: (pageProps: any, pageTemplate: any) => React.JSX.Element;
};
declare const pageTemplates: {
    __generic: (pageProps: TYPO3PagePropsInterface) => {
        main: React.JSX.Element;
    };
    default: (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    simple: (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
    };
    '2_columns': (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    '2_columns_25_75': (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    '2_columns_50_50': (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    '3_columns': (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    special_feature: (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
    special_start: (pageProps: TYPO3PagePropsInterface) => {
        border: React.JSX.Element;
        main: React.JSX.Element;
        footer: React.JSX.Element;
    };
};
declare const contentElementLayouts: {
    __generic: (props: any) => React.JSX.Element;
};
declare const contentElementTemplates: {
    __generic: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    text: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    html: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    textpic: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    image: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    shortcut: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    div: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    uploads: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    accordion: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    gallery: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    textmedia: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    card_group: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    textcolumn: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    quote: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    header: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    carousel: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    menu_card_list: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    menu_card_dir: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    menu_thumbnail_dir: (headlessContentData: any, pageProps: any) => React.JSX.Element;
    menu_thumbnail_list: (headlessContentData: any, pageProps: any) => React.JSX.Element;
};
declare const _default: React.NamedExoticComponent<TYPO3PagePropsInterface>;
export default _default;
export { pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates };
