import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Content from "../../../Templates/Content";
import {TYPO3PagePropsInterface} from "../../../Interfaces";

const FooterContent: React.FC<{ pageProps: TYPO3PagePropsInterface }> = ({pageProps}) => {
    return <footer className="section footer-section footer-section-content">
        <Container>
            <Row>
                <Col className="footer-section-content-column footer-section-content-column-left">
                    <Content colPos={'10'} pageProps={pageProps}/>
                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-middle">
                    <Content colPos={'11'} pageProps={pageProps}/>
                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-right">
                    <Content colPos={'12'} pageProps={pageProps}/>
                </Col>
            </Row>
        </Container>
    </footer>
}
export default FooterContent;