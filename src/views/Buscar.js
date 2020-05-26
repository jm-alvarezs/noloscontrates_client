import React, { Component } from "react";
import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import ExpedienteCard from "../components/expediente/ExpedienteCard";
import AlertaForm from "../components/notificaciones/AlertaForm";
import { getFondos } from "../actions/fondoActions";
import { setBusqueda, buscarExpedientes } from "../actions/expedientesActions";
import {
  crearAlerta,
  setPropiedadAlerta,
  postAlerta,
} from "../actions/alertasActions";
import { modalComponent } from "../actions/modalActions";
import { connect } from "react-redux";

class Buscar extends Component {
  componentDidMount() {
    this.props.getFondos(this.props.count);
  }

  componentDidUpdate() {
    if (this.props.alerta !== null) {
      this.props.modalComponent(
        "Agregar Alerta",
        <AlertaForm alerta={this.props.alerta} />,
        () => this.props.crearAlerta(null),
        () => this.props.postAlerta(this.props.alerta)
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.checkValidity === false) {
      return event.stopPropagation();
    }
    const busqueda = event.target.elements.busqueda.value;
    this.props.buscarExpedientes(busqueda);
  }

  crearAlerta() {
    if (this.props.expedientes !== null) {
      this.props.crearAlerta({
        correo: "",
        reporte: 1,
        columna: 1,
        valorBusqueda: this.props.busqueda,
        valorPrevio: this.props.expedientes.length,
      });
    }      
  }

  renderExpedientes() {
    if (this.props.expedientes !== null)
      return this.props.expedientes.map((expediente, index) => (
        <ExpedienteCard key={index} expediente={expediente} />
      ));
  }

  render() {
    const padding = this.props.expedientes === null ? "20vh" : 32;
    const fondo = this.props.fondo;
    return (
      <Container fluid={true} className="px-0 view" style={{ marginTop: 60 }}>
        <Row>
          <Container
            style={{
              paddingTop: padding,
              paddingBottom: padding,
              backgroundImage: `url(${fondo})`,
            }}
            className="px-0 background-image"
          >
            <h1 className="text-white">Consulta información sobre servidores públicos</h1>
            <h2 className="text-white">Toda la información es pública y transparente</h2>
            <Form onSubmit={(evt) => this.handleSubmit(evt)}>
              <Form.Label className="d-block text-white">Buscar un funcionario</Form.Label>
              <Form.Control
                type="text"
                name="busqueda"
                className="d-inline-block"
                placeholder="Ingresa un nombre o RFC"
                value={this.props.busqueda}
                onChange={(e) => this.props.setBusqueda(e.target.value)}
                style={{ maxWidth: "80%" }}
                required
              />
              <Button
                type="submit"
                className="d-inline-block"
                style={{ marginTop: -5, minWidth: "20%" }}
                disabled={this.props.buscando}
              >
                {this.props.buscando ? <Spinner animation="border" variant="light" /> : "Buscar"}
              </Button>
            </Form>
          </Container>
        </Row>
        <Row>
          <Container className="px-0" id="busqueda" style={{ overflowY: "scroll", maxHeight: "80vh" }}>
            {this.renderExpedientes()}
          </Container>
        </Row>
        <Button id="notificaciones" onClick={() => this.crearAlerta()} disabled={this.props.expedientes === null}>
          <i className="fa fa-2x fa-bell"></i>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  expedientes: state.expedientes.expedientes,
  busqueda: state.expedientes.busqueda,
  alerta: state.alertas.alerta,
  buscando: state.expedientes.buscando,
  count: state.fondos.count
});

export default connect(mapStateToProps, {
  getFondos,
  postAlerta,
  setBusqueda,
  crearAlerta,
  modalComponent,
  buscarExpedientes,
  setPropiedadAlerta,  
})(Buscar);
