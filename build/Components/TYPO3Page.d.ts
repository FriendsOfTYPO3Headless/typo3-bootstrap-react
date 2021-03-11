import React from "react";
import { TYPO3PagePropsInterface } from "./Interfaces";
declare const pageLayouts: {
    __generic: (config: any, pageTemplate: any, contentElementLayouts: any, contentElementTemplates: any) => JSX.Element;
};
declare const pageTemplates: {
    __generic: (config: any, contentElementLayouts: any, contentElementTemplates: any) => {
        main: JSX.Element;
    };
    example: (config: any, contentElementLayout: any, contentElementTemplates: any) => {
        main: JSX.Element;
    };
    default: (config: any, contentElementLayouts: any, contentElementTemplates: any) => {
        main: JSX.Element;
        footer: JSX.Element;
        header: JSX.Element;
    };
    simple: (config: any, contentElementLayouts: any, contentElementTemplates: any) => {
        main: JSX.Element;
        footer: JSX.Element;
        header: JSX.Element;
    };
    '2Columns': (config: any, contentElementLayouts: any, contentElementTemplates: any) => {
        main: JSX.Element;
        footer: JSX.Element;
        header: JSX.Element;
    };
};
declare const contentElementLayouts: {
    __generic: string;
};
declare const contentElementTemplates: {
    __generic: string;
};
declare const TYPO3Page: React.FC<TYPO3PagePropsInterface>;
export default TYPO3Page;
export { pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates };
