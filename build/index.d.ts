import TYPO3Page, {TYPO3PageContext} from "./Components/TYPO3Page";
import Page from './Components/Templates/Page';
import Section from './Components/Partials/Page/Section';
import Content from './Components/Templates/Content';
import * as ContentElements from './Components/Templates/ContentElements';
import AllHeader from "./Components/Partials/ContentElements/Header/All";
import MediaType from './Components/Partials/ContentElements/Media/Type';
import {
    TYPO3BootstrapContentElementBaseInterface,
    TYPO3PageHeadlessDataInterface,
    TYPO3PagePropsInterface
} from "./Components/Interfaces";

export { TYPO3Page, TYPO3PageContext, TYPO3PageHeadlessDataInterface, TYPO3PagePropsInterface, TYPO3BootstrapContentElementBaseInterface, Page, Section, Content, ContentElements, AllHeader, MediaType };
