import NoticiasService from "../services/NoticiasService";
import { NOTICIAS_RECIBIDAS } from "./types";

export const getNoticias = busqueda => dispatch => {
    NoticiasService.getNoticias(busqueda).then(res => {
        const { noticias } = res.data;
        dispatch({ type: NOTICIAS_RECIBIDAS, payload: noticias });
    }).catch(error => {
        console.log(error);
    })
};

export const clearNoticias = () => dispatch => {
    dispatch({ type: NOTICIAS_RECIBIDAS, payload: null });
};