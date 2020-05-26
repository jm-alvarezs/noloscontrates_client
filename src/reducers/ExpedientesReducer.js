import { EXPEDIENTES_RECIBIDOS, EXPEDIENTE_RECIBIDO, SET_BUSQUEDA, BUSCANDO, SET_EXPEDIENTE } from "../actions/types";

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
    case SET_EXPEDIENTE:
      let expedientes = state.expedientes;
      if(expedientes === null) expedientes = [];
      expedientes = [...expedientes];
      const expediente = expedientes.find(exp => exp.id_expediente === payload);
      return { ...state, expediente };
    default:
      return { ...state };
  }
};
