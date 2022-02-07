import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Content from "../../../Templates/Content";

const FooterContent: React.FC = () => {
    return <footer className="section footer-section footer-section-content">
        <Container>
            <Row>
                <Col className="footer-section-content-column footer-section-content-column-left">
                    <Content colPos={'10'} />
                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-middle">
                    <Content colPos={'11'} />
                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-right">
                    <Content colPos={'12'} />
                </Col>
            </Row>
        </Container>
    </footer>
}
export default FooterContent;