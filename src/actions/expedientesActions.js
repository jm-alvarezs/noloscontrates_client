import { SET_BUSQUEDA, EXPEDIENTES_RECIBIDOS } from "./types";
import BuscarService from "../services/BuscarService";

export const setBusqueda = busqueda => dispatch => {
    dispatch({ type: SET_BUSQUEDA, payload: busqueda });
};

export const buscarExpedientes = busqueda => dispatch => {
    BuscarService.getExpedientes(busqueda).then(res => {
        const { registros } = res.data;
        dispatch({ type: EXPEDIENTES_RECIBIDOS, payload: registros });
    }).catch(error => {
        console.log(error);
    });
};