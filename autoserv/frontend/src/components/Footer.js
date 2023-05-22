import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Footer = () =>{
    return (
        <container>
            <Row>
                <Col className="col-lg-12 col-sm-12 m-0">
                    <div className="fixed-bottom bg-dark">
                        <p className="text-center text-white">Footer</p>
                    </div>
                </Col>
            </Row>
        </container>
    );
}

export default Footer;