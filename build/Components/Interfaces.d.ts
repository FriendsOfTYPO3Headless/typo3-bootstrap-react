interface TYPO3PageHeadlessDataInterface {
    id: number;
    type: string;
    slug: string;
    media: any;
    meta: any;
    categories: string;
    appearance: any;
    content: any;
    navigations: any;
}
interface TYPO3PagePropsInterface {
    headlessData: TYPO3PageHeadlessDataInterface;
    pageLayouts?: any | null;
    pageTemplates?: any | null;
    contentElementLayouts?: any | null;
    contentElementTemplates?: any | null;
}
export { TYPO3PageHeadlessDataInterface, TYPO3PagePropsInterface };
