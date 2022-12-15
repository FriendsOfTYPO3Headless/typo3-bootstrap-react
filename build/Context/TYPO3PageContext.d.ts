import {TYPO3PageHeadlessDataInterface} from "../Components/Interfaces";
import React from "react";

interface ITYPO3PageContext {
    headlessData: TYPO3PageHeadlessDataInterface;
    pageLayouts: any;
    pageTemplates: any;
    contentElementLayouts: any;
    contentElementTemplates: any;
    additionalParams?: any | null;
}
declare const TYPO3PageContext: React.Context<ITYPO3PageContext>;
export default TYPO3PageContext;
