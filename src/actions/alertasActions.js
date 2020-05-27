import { CREAR_ALERTA, SET_PROPIEDAD_ALERTA } from "./types";
import NotificacionesService from "../services/NotificacionesService";
import { displaySuccess, displayError } from "../utils";

export const crearAlerta = (alerta) => (dispatch) => {
  dispatch({ type: CREAR_ALERTA, payload: alerta });
};

export const setPropiedadAlerta = (key, value) => (dispatch) => {
  dispatch({ type: SET_PROPIEDAD_ALERTA, payload: { key, value } });
};

export const postAlerta = (alerta) => (dispatch) => {
  const { correo, reporte, columna, valorBusqueda, valorPrevio } = alerta;  
  if(correo === "" || !correo) return displayError(dispatch, "Debes ingresar un correo electrónico válido.");
  NotificacionesService.postNotificacion(
    correo,
    reporte,
    columna,
    valorBusqueda,
    valorPrevio
  )
    .then((res) => {
      displaySuccess(dispatch, "Notificacion guardada con éxito.");
    })
    .catch((error) => {
      displayError(dispatch, "Hubo un error al generar la alerta.");
    });
};
