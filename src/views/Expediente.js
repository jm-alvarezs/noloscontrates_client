import React, { Component } from 'react'
import { Container, Spinner } from "react-bootstrap";
import CardNoticia from "../components/noticias/CardNoticias";
import { getNoticias } from "../actions/noticiasActions";
import { connect } from 'react-redux';

class Expediente extends Component {

    componentDidMount() {
        this.props.getNoticias(this.props.busqueda);
    }

    renderNoticias() {
        if(this.props.noticias === null) return <Spinner animation="border" variant="dark"/>
        return this.props.noticias.map((noticia, index) => (
            <CardNoticia key={index} noticia={noticia} />
        ));
    }

    render() {
        return (
            <Container style={{ marginTop: 60 }}>
                <h2>Expediente</h2>
                <h2>Noticias</h2>
                {this.renderNoticias()}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    expediente: state.expedientes.expediente,
    busqeuda: state.expedientes.busqueda,
    noticias: state.noticias.noticias
});

export default connect(mapStateToProps, { getNoticias })(Expediente);