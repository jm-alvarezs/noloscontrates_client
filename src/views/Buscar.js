import React, { Component } from "react";
import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import ExpedienteCard from "../components/expediente/ExpedienteCard";
import AlertaForm from "../components/notificaciones/AlertaForm";
import ReactDOM from "react-dom";
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
  constructor(props) {
    super(props);
    this.state = {
      avanzado: false,
      columna: "dependencia",
      filtro: "",
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getFondos(this.props.count);
  }

  componentDidUpdate() {
    if (this.props.alerta !== null) {
      this.props.modalComponent(
        "Agregar Alerta",
        <AlertaForm
          alerta={this.props.alerta}
          modifier={this.props.setPropiedadAlerta}
        />,
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

  handleFilter() {
    let value = ReactDOM.findDOMNode(this.refs.select).value;
    this.setState({ columna: value });
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

  filtrarExpedientes() {
    if (
      this.state.columna !== null &&
      this.state.filtro !== null &&
      this.state.filtro !== ""
    ) {
      return this.props.expedientes.filter((expediente) => {
        let columna = expediente[this.state.columna];
        if (columna) {
          columna = columna.toLowerCase();
          let filtro = this.state.filtro.toLowerCase();
          return columna.startsWith(filtro) || columna.includes(filtro);
        }
        return false;
      });
    }
    return this.props.expedientes;
  }

  renderExpedientes() {
    if (this.props.expedientes !== null)
      return this.filtrarExpedientes().map((expediente, index) => (
        <ExpedienteCard key={index} expediente={expediente} />
      ));
  }

  renderAvanzado() {
    if (this.state.avanzado) {
      return (
        <Row className="mt-2 mx-0">
          <Form.Control
            type="text"
            className="w-50 d-inline-block"
            value={this.state.filtro}
            onChange={(e) => this.setState({ filtro: e.target.value })}
          />
          <Form.Control
            as="select"
            ref="select"
            className="w-50 d-inline-block"
            onChange={this.handleFilter}
          >
            <option value="dependencia">Dependencia</option>
            <option value="sancionimpuesta">Sanción Impuesta</option>
            <option value="autoridad">Autoridad</option>
            <option value="fechaResol">Fecha Resolución</option>
            <option value="causa">Causa</option>
            <option value="monto">Monto</option>
            <option value="inicio">Fecha Inicio</option>
            <option value="fin">Fecha Fin</option>
          </Form.Control>
        </Row>
      );
    }
  }

  renderBoton() {
    if (this.props.expedientes && this.props.expedientes !== null) {
      return (
        <Button
          variant="link"
          className="px-0 text-white"
          onClick={() => this.setState({ avanzado: !this.state.avanzado })}
        >
          Avanzado
        </Button>
      );
    }
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
            <h1 className="text-white">
              Consulta información sobre servidores públicos
            </h1>
            <h2 className="text-white">
              Toda la información es pública y transparente
            </h2>
            <Form onSubmit={(evt) => this.handleSubmit(evt)}>
              <Form.Label className="d-block text-white">
                Buscar un funcionario
              </Form.Label>
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
                {this.props.buscando ? (
                  <Spinner animation="border" variant="light" />
                ) : (
                  "Buscar"
                )}
              </Button>
              {this.renderAvanzado()}
              {this.renderBoton()}
            </Form>
          </Container>
        </Row>
        <Row>
          <Container
            className="px-0"
            id="busqueda"
            style={{ overflowY: "scroll", maxHeight: "80vh" }}
          >
            {this.renderExpedientes()}
          </Container>
        </Row>
        <Button
          id="notificaciones"
          onClick={() => this.crearAlerta()}
          disabled={this.props.expedientes === null}
        >
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
  count: state.fondos.count,
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
