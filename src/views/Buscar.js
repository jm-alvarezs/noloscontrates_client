import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import ExpedienteCard from "../components/expediente/ExpedienteCard";
import { getFondos } from "../actions/fondoActions";
import { setBusqueda, buscarExpedientes } from "../actions/expedientesActions";
import { connect } from "react-redux";

class Buscar extends Component {
  componentDidMount() {
    //this.props.getFondos();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.checkValidity === false) {
      return event.stopPropagation();
    }
    const busqueda = event.target.elements.busqueda.value;
    this.props.buscarExpedientes(busqueda);
  }

  renderExpedientes() {
    if (this.props.expedientes !== null)
      return this.props.expedientes.map((expediente, index) => (
        <ExpedienteCard
          key={index}
          expediente={expediente}
        />
      ));
  }

  render() {
    const padding = this.props.expedientes === null ? "20vh" : 32;
    const fondo = this.props.fondo;
    return (
      <Container fluid={true} className="px-0">
        <Row>
          <Container style={{ paddingTop: padding, paddingBottom: padding, backgroundImage: `url(${fondo})` }} className="px-0 background-image">
            <h1>Consulta información sobre servidores públicos</h1>
            <h2>Toda la información es pública y transparente</h2>
            <Form onSubmit={(evt) => this.handleSubmit(evt)}>
              <Form.Label className="d-block">Buscar un funcionario</Form.Label>
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
              <Button type="submit" className="d-inline-block" style={{ marginTop: -5, minWidth: "20%" }}>Buscar</Button>
            </Form>
            </Container>          
        </Row>
        <Row>
          <Container className="px-0">
            {this.renderExpedientes()}
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  expedientes: state.expedientes.expedientes,
  busqueda: state.expedientes.busqueda,
});

export default connect(mapStateToProps, { setBusqueda, buscarExpedientes, getFondos })(
  Buscar
);
