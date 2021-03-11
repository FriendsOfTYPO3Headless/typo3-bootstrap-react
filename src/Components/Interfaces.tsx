interface TYPO3PageConfigInterface {
    page: any;
    content: any;
    navigations: any;
}

interface TYPO3PagePropsInterface {
    config: TYPO3PageConfigInterface;
    pageLayouts: any | null;
    pageTemplates: any | null;
    contentElementLayouts: any | null;
    contentElementTemplates: any | null;
}

export {TYPO3PageConfigInterface, TYPO3PagePropsInterface};