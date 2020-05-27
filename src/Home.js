import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/navigation/Navbar";
import Buscar from "./views/Buscar";
import Expediente from "./views/Expediente";
import { Router } from "@reach/router";
import SuccessAlert from "./components/common/SuccessAlert";
import ErrorAlert from "./components/common/ErrorAlert";
import ModalConfirm from "./components/common/ModalConfirm";
import { setFondo } from "./actions/fondoActions";
import { connect } from "react-redux";

const Home = (props) => {
  setTimeout(() => props.setFondo(props.current, props.page), 10000);

  return (
    <>
    
      <Container
        id="background"
        className="px-0"
        style={{ backgroundImage: `url(${props.fondo})` }}
        fluid={true}
      />
      <Container fluid={true} id="overlay" />
      <Container
        fluid={true}
        className="px-0"
        id="home"
        style={{ overflow: "hidden", zIndex: 1 }}
      >
        <Navbar />
        <Router>
          <Buscar path="/" />
          <Expediente path="/expediente/:id_expediente/*" />
        </Router>
        <footer>
          <p>
            Una iniciativa de{" "}
            <a href="https://redesquintopoder.org.mx" target="_blank" rel="noopener noreferrer">
              Redes Quinto Poder IDEA A.C.
            </a>
          </p>
        </footer>
        <SuccessAlert />
        <ModalConfirm />
        <ErrorAlert />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  fondo: state.fondos.fondo,
  current: state.fondos.current,
  page: state.fondos.page,
});

export default connect(mapStateToProps, { setFondo })(Home);
