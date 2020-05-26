import React, { Component } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardNoticia from "../components/noticias/CardNoticias";
import ExpedienteCard from "../components/expediente/ExpedienteCard";
import { getExpediente } from "../actions/expedientesActions";
import { getNoticias } from "../actions/noticiasActions";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

class Expediente extends Component {
  componentDidMount() {
    if (this.props.busqueda) this.props.getNoticias(this.props.busqueda);
    let id_expediente = this.getIdExpediente();
    if (id_expediente) this.props.getExpediente(id_expediente);
  }

  componentDidUpdate() {
    if (!this.props.busqueda) navigate("/");
  }

  getIdExpediente() {
    let id_expediente = this.props.location.pathname.substring(12);
    return id_expediente;
  }

  renderNoticias() {
    if (this.props.noticias === null)
      return <Spinner animation="border" variant="dark" />;
    if (this.props.noticias && this.props.noticias !== null)
      return this.props.noticias.map((noticia, index) => (
        <CardNoticia key={index} noticia={noticia} />
      ));
  }

  renderExpediente() {
    if (this.props.expediente && this.props.expediente !== null)
      return (
        <ExpedienteCard
          expediente={this.props.expediente}
          id_expediente={this.getIdExpediente()}
        />
      );
  }

  render() {
    return (
      <Container style={{ marginTop: 70 }} className="px-0">
        <h2>Expediente</h2>
        {this.renderExpediente()}
        <h2>Noticias</h2>
        {this.renderNoticias()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  expediente: state.expedientes.expediente,
  busqueda: state.expedientes.busqueda,
  noticias: state.noticias.noticias,
});

export default connect(mapStateToProps, { getNoticias, getExpediente })(
  Expediente
);
