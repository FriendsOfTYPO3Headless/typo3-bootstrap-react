import React from "react";
import { TYPO3PagePropsInterface } from "./Interfaces";
declare const pageLayouts: {
    'layout-0': (headlessData: any, pageTemplate: any, args?: {}) => JSX.Element;
    __generic: (headlessData: any, pageTemplate: any, args?: {}) => JSX.Element;
    Default: (headlessData: any, pageTemplate: any, args?: {}) => JSX.Element;
};
declare const pageTemplates: {
    __generic: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        main: JSX.Element;
    };
    default: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    simple: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
    };
    '2_columns': (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '2_columns_25_75': (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '2_columns_50_50': (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    '3_columns': (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    special_feature: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
    special_start: (headlessData: any, contentElementLayouts: any, contentElementTemplates: any, args?: {}) => {
        border: JSX.Element;
        main: JSX.Element;
        footer: JSX.Element;
    };
};
declare const contentElementLayouts: {
    __generic: (props: any) => JSX.Element;
};
declare const contentElementTemplates: {
    __generic: (headlessContentData: any, args?: {}) => JSX.Element;
    text: (headlessContentData: any, args?: {}) => JSX.Element;
    textpic: (headlessContentData: any, args?: {}) => JSX.Element;
    image: (headlessContentData: any, args?: {}) => JSX.Element;
    div: (headlessContentData: any, args?: {}) => JSX.Element;
};
declare const TYPO3Page: React.FC<TYPO3PagePropsInterface>;
export default TYPO3Page;
export { pageLayouts, pageTemplates, contentElementLayouts, contentElementTemplates };
