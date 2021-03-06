import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default (props) => (
  <Card className="p-4 shadow round my-2">
    <Row>
      <Col>
        <h4>{props.expediente.servidorPublico}</h4>
        <h5 className="text-danger">{props.expediente.sancionImpuesta}</h5>
        <p>
          {props.expediente.inicio} - {props.expediente.fin}
        </p>
        <p>Resolucion: {props.expediente.fechaResol}</p>
      </Col>
      <Col>
        <h6>{props.expediente.causa}</h6>
        <p>{props.expediente.dependencia}</p>
        <p>{props.expediente.autoridad}</p>
        <p>{"$"}{props.expediente.monto}</p>
        {props.id_expediente ? (
          "Expediente: " + props.id_expediente
        ) : (
          <Link
            className="text-cyan"
            to={`/expediente/${props.expediente.id_expediente}`}
          >
            Ver Expediente
          </Link>
        )}
      </Col>
    </Row>
  </Card>
);
