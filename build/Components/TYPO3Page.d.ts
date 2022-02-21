import React from "react";
import { TYPO3PagePropsInterface } from "./Interfaces";
import TYPO3PageContext from "../Context/TYPO3PageContext";
declare const pageLayouts: {
    'layout-0': (headlessData: any, pageTemplate: any) => JSX.Element;
    __generic: (headlessData: any, pageTemplate: any) => JSX.Element;
    Default: (headlessData: any, pageTemplate: any) => JSX.Element;
};
declare const pageTemplates: {
    __generic: {
        main: JSX.Element;
    };
    default: {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    simple: {
        border: JSX.Element;
        main: JSX.Element;
    };
    '2_columns': {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '2_columns_25_75': {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '2_columns_50_50': {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '3_columns': {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    special_feature: {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    special_start: {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
};
declare const contentElementLayouts: {
    __generic: (props: any) => JSX.Element;
};
declare const contentElementTemplates: {
    __generic: (headlessContentData: any) => JSX.Element;
    text: (headlessContentData: any) => JSX.Element;
    html: (headlessContentData: any) => JSX.Element;
    textpic: (headlessContentData: any) => JSX.Element;
    image: (headlessContentData: any) => JSX.Element;
    shortcut: (headlessContentData: any) => JSX.Element;
    div: (headlessContentData: any) => JSX.Element;
    uploads: (headlessContentData: any) => JSX.Element;
    accordion: (headlessContentData: any) => JSX.Element;
    gallery: (headlessContentData: any) => JSX.Element;
};
declare const _default: React.NamedExoticComponent<TYPO3PagePropsInterface>;
export default _default;
export { pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates, TYPO3PageContext };
