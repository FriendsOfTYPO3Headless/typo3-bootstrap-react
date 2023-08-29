import React from 'react';
import Content from "../../../Templates/Content";
import {TYPO3PagePropsInterface} from "../../../Interfaces";

const FooterContent: React.FC<{ pageProps: TYPO3PagePropsInterface }> = ({pageProps}) => {
    return <footer className="section footer-section footer-section-content">
        <div className={'container'}>
            <div className={'row'}>
                <div className="col footer-section-content-column footer-section-content-column-left">
                    <Content colPos={'10'} pageProps={pageProps}/>
                </div>
                <div className="col footer-section-content-column footer-section-content-column-middle">
                    <Content colPos={'11'} pageProps={pageProps}/>
                </div>
                <div className="col footer-section-content-column footer-section-content-column-right">
                    <Content colPos={'12'} pageProps={pageProps}/>
                </div>
            </div>
        </div>
    </footer>
}
export default FooterContent;