import {TYPO3PageHeadlessDataInterface} from "../Components/Interfaces";
import React from "react";

interface ITYPO3PageContext {
    headlessData: TYPO3PageHeadlessDataInterface,
    pageLayouts: any,
    pageTemplates: any,
    contentElementLayouts: any,
    contentElementTemplates: any,
    additionalParams?: any | null,
}
const TYPO3PageContext = React.createContext<ITYPO3PageContext | null>(null);

export default TYPO3PageContext;