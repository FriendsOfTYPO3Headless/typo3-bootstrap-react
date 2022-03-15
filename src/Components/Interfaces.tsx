import React from "react";

interface TYPO3PageHeadlessDataInterface {
    id: number
    type: string,
    slug: string,
    media: any,
    meta: any,
    categories: string,
    appearance: any,
    content: any;
    navigations: any;
    error?: any | null;
}

interface TYPO3PagePropsInterface {
    headlessData: TYPO3PageHeadlessDataInterface;
    pageLayouts?: any | null;
    pageTemplates?: any | null;
    contentElementLayouts?: any | null;
    contentElementTemplates?: any | null;
    additionalParams?: any | null;
}

interface TYPO3BootstrapContentElementBaseInterface {
    data: any,
    addtionalContent?: React.FC
}

export {TYPO3PageHeadlessDataInterface, TYPO3PagePropsInterface, TYPO3BootstrapContentElementBaseInterface};