import { FONDOS_RECIBIDOS, SET_FONDO } from "./types";
import FondosService from "../services/FondosService";
import { displayError } from "../utils";

export const getFondos = (page) => dispatch => {
    FondosService.getFondos(page).then(res => {
        const images = res.data.results;
        dispatch({ type: FONDOS_RECIBIDOS, payload: images });
    }).catch(error => {
        displayError(dispatch, error);
    })
};

export const setFondo = (current, page) => dispatch => {
    if(current > 9) {
        FondosService.getFondos(page).then(res => {
            const images = res.data.results;
            dispatch({ type: FONDOS_RECIBIDOS, payload: images });
        }).catch(error => {
            displayError(dispatch, error);
        });
    } else {
        dispatch({ type: SET_FONDO });
    }
};