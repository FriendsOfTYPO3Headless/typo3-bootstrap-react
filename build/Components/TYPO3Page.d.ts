import React from "react";
import { TYPO3PagePropsInterface } from "./Interfaces";
declare const pageLayouts: {
    'layout-0': (headlessData: any, pageTemplate: any, args?: {}) => JSX.Element;
    __generic: (headlessData: any, pageTemplate: any, args?: {}) => JSX.Element;
};
declare const pageTemplates: {
    __generic: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
    };
    example: (headlessData: any, contentElementLayout: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
    };
    default: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
        footer: JSX.Element;
        header: JSX.Element;
    };
    simple: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
        border: JSX.Element;
    };
    '2Columns': (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
        footer: JSX.Element;
        header: JSX.Element;
    };
};
declare const contentElementLayouts: {
    __generic: (props: any) => JSX.Element;
};
declare const contentElementTemplates: {
    __generic: (headlessContentData: any, args?: {}) => JSX.Element;
    text: (headlessContentData: any) => JSX.Element;
    textpic: (headlessContentData: any) => JSX.Element;
};
declare const TYPO3Page: React.FC<TYPO3PagePropsInterface>;
export default TYPO3Page;
export { pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates };
