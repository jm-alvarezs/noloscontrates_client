import { EXPEDIENTES_RECIBIDOS, EXPEDIENTE_RECIBIDO, SET_BUSQUEDA, BUSCANDO } from "../actions/types";

const INITIAL_STATE = {
  expedientes: null,
  expediente: null,
  busqueda: "",
  buscando: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EXPEDIENTES_RECIBIDOS:
      return { ...state, expedientes: payload, buscando: false };
    case EXPEDIENTE_RECIBIDO:
      return { ...state, expedientes: payload, buscando: false };
    case SET_BUSQUEDA:      
      return { ...state, busqueda: payload };
    case BUSCANDO:
      return { ...state, buscando: true };
    default:
      return { ...state };
  }
};
