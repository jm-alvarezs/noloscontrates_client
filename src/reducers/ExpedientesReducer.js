import { EXPEDIENTES_RECIBIDOS, EXPEDIENTE_RECIBIDO, SET_BUSQUEDA } from "../actions/types";

const INITIAL_STATE = {
  expedientes: null,
  expediente: null,
  busqueda: ""
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EXPEDIENTES_RECIBIDOS:
      return { ...state, expedientes: payload };
    case EXPEDIENTE_RECIBIDO:
      return { ...state, expedientes: payload };
    case SET_BUSQUEDA:
        return { ...state, busqueda: payload };
    default:
      return { ...state };
  }
};
