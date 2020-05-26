import React from 'react';
import { Card, Row, Col, Image } from "react-bootstrap";
import { Link } from "@reach/router";

export default props => (
    <Card className="p-4 shadow round my-3">
        <Row>
            <Col>
                <Image src={props.noticia.image} className="mw-100 w-100" />
            </Col>
            <Col>
                <h4>{props.noticia.title}</h4>
                <h5>{props.noticia.publishedAt}</h5>
                <h6>{props.noticia.source.name}</h6>                
                <Link className="text-cyan" to={props.noticia.url}>Ver Noticia</Link>
            </Col>
        </Row>
    </Card>
);