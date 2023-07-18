import TYPO3Page from "./Components/TYPO3Page";
import Page from './Components/Templates/Page';
import Section from './Components/Partials/Page/Section';
import Content from './Components/Templates/Content';
import * as ContentElements from './Components/Templates/ContentElements';
import AllHeader from "./Components/Partials/ContentElements/Header/All";
import MediaType from './Components/Partials/ContentElements/Media/Type'

import {TYPO3PagePropsInterface, TYPO3PageHeadlessDataInterface, TYPO3BootstrapContentElementBaseInterface} from "./Components/Interfaces";

export {
    TYPO3Page,
    TYPO3PageHeadlessDataInterface,
    TYPO3PagePropsInterface,
    TYPO3BootstrapContentElementBaseInterface,
    Page,
    Section,
    Content,
    ContentElements,
    AllHeader,
    MediaType
};