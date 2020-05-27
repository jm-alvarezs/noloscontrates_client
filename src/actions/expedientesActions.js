import { SET_BUSQUEDA, EXPEDIENTES_RECIBIDOS, BUSCANDO, SET_EXPEDIENTE } from "./types";
import BuscarService from "../services/BuscarService";
import { displayError } from "../utils";

export const setBusqueda = busqueda => dispatch => {
    dispatch({ type: SET_BUSQUEDA, payload: busqueda });
};

export const buscarExpedientes = busqueda => dispatch => {
    dispatch({ type: BUSCANDO });
    BuscarService.getExpedientes(busqueda).then(res => {
        const { registros } = res.data;
        dispatch({ type: EXPEDIENTES_RECIBIDOS, payload: registros });
    }).catch(error => {
        displayError(dispatch, "Hubo un error al realizar la búsqueda.");
    });
};

export const getExpediente = id_expediente => dispatch => {
    dispatch({ type: SET_EXPEDIENTE, payload: id_expediente });
};