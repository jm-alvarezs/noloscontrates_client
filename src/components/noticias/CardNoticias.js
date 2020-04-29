import React from 'react';
import { Card, Row, Col, Image } from "react-bootstrap";
import { Link } from "@reach/router";

export default props => (
    <Card className="p-4 shadow round">
        <Row>
            <Col>
                <Image src={props.noticia.image_src} className="mw-100 w-100" />
            </Col>
            <Col>
                <h4>{props.noticia.titulo}</h4>
                <h5>{props.noticia.fecha}</h5>
                <h6>{props.noticia.ubicacion}</h6>                
                <Link className="text-cyan" to={props.noticia.url}>Ver Noticia</Link>
            </Col>
        </Row>
    </Card>
);