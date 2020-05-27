import NoticiasService from "../services/NoticiasService";
import { NOTICIAS_RECIBIDAS } from "./types";
import { displayError } from "../utils";

export const getNoticias = busqueda => dispatch => {
    NoticiasService.getNoticias(busqueda).then(res => {        
        const noticias = res.data.resp.articles;
        dispatch({ type: NOTICIAS_RECIBIDAS, payload: noticias });
    }).catch(error => {
        displayError(dispatch, "Hubo un error al obtener noticias.");
    })
};

export const clearNoticias = () => dispatch => {
    dispatch({ type: NOTICIAS_RECIBIDAS, payload: null });
};