import {default as TYPO3Page} from "./Components/TYPO3Page";
import {default as Page} from './Components/Templates/Page';
import {default as Section} from './Components/Partials/Page/Section';
import {default as Content} from './Components/Templates/Content';
import * as ContentElements from './Components/Templates/ContentElements';
import {default as AllHeader} from "./Components/Partials/ContentElements/Header/All";
import {default as MediaType} from './Components/Partials/ContentElements/Media/Type'
import {PageLayouts} from "./defaults/PageLayouts";
import {PageTemplates} from "./defaults/PageTemplates";
import {ContentElementLayouts} from "./defaults/ContentElementLayouts";
import {ContentElementTemplates} from "./defaults/ContentElementTemplates";

import {
    TYPO3PagePropsInterface,
    TYPO3PageHeadlessDataInterface,
    TYPO3BootstrapContentElementBaseInterface
} from "./Components/Interfaces";

declare module 'typo3-bootstrap-react' {
    export {
        TYPO3Page,
        type TYPO3PageHeadlessDataInterface,
        type TYPO3PagePropsInterface,
        type TYPO3BootstrapContentElementBaseInterface,
        Page,
        Section,
        Content,
        ContentElements,
        AllHeader,
        MediaType,
        PageLayouts,
        PageTemplates,
        ContentElementLayouts,
        ContentElementTemplates
    }
}