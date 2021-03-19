import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Content from "../../../Templates/Content";

const FooterContent: React.FC<{ content : any , contentElementLayouts : any , contentElementTemplates: any  }> = props => {

    return <footer className="section footer-section footer-section-content">
        <Container>
            <Row>
                <Col className="footer-section-content-column footer-section-content-column-left">
                    <Content colPos={'10'} slide={-1} content={props.content}
                             contentElementLayouts={props.contentElementLayouts}
                             contentElementTemplates={props.contentElementTemplates}/>

                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-middle">
                    <Content colPos={'11'} slide={-1} content={props.content}
                             contentElementLayouts={props.contentElementLayouts}
                             contentElementTemplates={props.contentElementTemplates}/>
                </Col>
                <Col className=" footer-section-content-column footer-section-content-column-right">
                    <Content colPos={'12'} slide={-1} content={props.content}
                             contentElementLayouts={props.contentElementLayouts}
                             contentElementTemplates={props.contentElementTemplates}/>
                </Col>
            </Row>
        </div>
    </footer>
}
export default FooterContent;